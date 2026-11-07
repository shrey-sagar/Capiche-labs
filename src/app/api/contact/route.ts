import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { ContactSchema } from "@/types/contact";

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json();

    // Validate request
    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    const data = result.data;

    console.log("📩 New Contact Form");
    console.log(data);

    // ===============================
    // SEND EMAIL TO CAPICHE LABS
    // ===============================

    const adminEmail = await resend.emails.send({
      from: "Capiche Labs <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `🚀 New Inquiry from ${data.name}`,
      html: `
      <div style="font-family:Arial;padding:40px;background:#f5f5f5;">
        <div style="max-width:700px;margin:auto;background:#fff;padding:40px;border-radius:16px;">

          <h1>🚀 New Contact Form Submission</h1>

          <table style="width:100%;border-collapse:collapse;">

            <tr>
              <td><strong>Name</strong></td>
              <td>${data.name}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${data.email}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${data.phone}</td>
            </tr>

            <tr>
              <td><strong>Company</strong></td>
              <td>${data.company || "-"}</td>
            </tr>

            <tr>
              <td><strong>Service</strong></td>
              <td>${data.service}</td>
            </tr>

            <tr>
              <td><strong>Budget</strong></td>
              <td>${data.budget || "-"}</td>
            </tr>

            <tr>
              <td><strong>Timeline</strong></td>
              <td>${data.timeline || "-"}</td>
            </tr>

          </table>

          <hr style="margin:30px 0"/>

          <h3>Message</h3>

          <p style="line-height:1.8;">
            ${data.message}
          </p>

        </div>
      </div>
      `,
    });

    if (adminEmail.error) {
      console.error(adminEmail.error);

      return NextResponse.json(
        {
          success: false,
          message: adminEmail.error.message,
        },
        {
          status: 500,
        }
      );
    }

    console.log("✅ Admin Email Sent");

    // ===============================
    // AUTO REPLY TO CLIENT
    // ===============================

    const autoReply = await resend.emails.send({
      from: "Capiche Labs <onboarding@resend.dev>",
      to: data.email,
      subject: "Thank you for contacting Capiche Labs 🚀",
      html: `
      <div style="background:#f5f7fb;padding:50px;font-family:Arial,sans-serif;">

        <div style="max-width:700px;margin:auto;background:white;padding:45px;border-radius:18px;">

          <h1 style="color:#111827;">
            Thank You, ${data.name}! 👋
          </h1>

          <p style="font-size:16px;line-height:1.8;">
            We have successfully received your inquiry.
          </p>

          <p style="font-size:16px;line-height:1.8;">
            One of our experts will contact you within
            <strong>24 hours.</strong>
          </p>

          <hr style="margin:30px 0;" />

          <h2>Your Request</h2>

          <table style="width:100%;border-collapse:collapse;">

            <tr>
              <td><strong>Service</strong></td>
              <td>${data.service}</td>
            </tr>

            <tr>
              <td><strong>Budget</strong></td>
              <td>${data.budget || "-"}</td>
            </tr>

            <tr>
              <td><strong>Timeline</strong></td>
              <td>${data.timeline || "-"}</td>
            </tr>

          </table>

          <hr style="margin:30px 0;" />

          <h3>Next Steps</h3>

          <ul style="line-height:2;">

            <li>✅ Our team reviews your requirements.</li>

            <li>✅ We prepare a custom proposal.</li>

            <li>✅ We schedule a discussion.</li>

            <li>✅ Development begins after approval.</li>

          </ul>

          <div style="text-align:center;margin-top:40px;">

            <a
              href="https://capichelabs.com"
              style="
                display:inline-block;
                background:#0891b2;
                color:white;
                padding:14px 30px;
                text-decoration:none;
                border-radius:10px;
                font-weight:bold;
              "
            >
              Visit Our Website
            </a>

          </div>

          <p style="margin-top:40px;color:#999;text-align:center;font-size:14px;">
            © 2026 Capiche Labs
          </p>

        </div>

      </div>
      `,
    });

    if (autoReply.error) {
      console.error("❌ Auto Reply Failed");
      console.error(autoReply.error);
    } else {
      console.log("✅ Auto Reply Sent");
    }

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("❌ Contact API Error");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}