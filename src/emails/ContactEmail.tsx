import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  phone,
  company,
  service,
  budget,
  timeline,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>
        New Project Inquiry from Capiche Labs
      </Preview>

      <Body
        style={{
          backgroundColor: "#f5f5f5",
          fontFamily:
            "Arial, Helvetica, sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "620px",
            margin: "40px auto",
            backgroundColor: "#ffffff",
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid #e5e5e5",
          }}
        >
          {/* Header */}

          <Section
            style={{
              background: "#000",
              padding: "32px",
              textAlign: "center",
            }}
          >
            <Heading
              style={{
                color: "#fff",
                margin: 0,
                fontSize: "30px",
              }}
            >
              Capiche Labs
            </Heading>

            <Text
              style={{
                color: "#bdbdbd",
                marginTop: "10px",
              }}
            >
              New Website Inquiry
            </Text>
          </Section>

          <Section style={{ padding: "35px" }}>
            <Heading
              style={{
                fontSize: "24px",
                marginBottom: "25px",
              }}
            >
              Contact Details
            </Heading>

            <Text>
              <strong>Name:</strong> {name}
            </Text>

            <Text>
              <strong>Email:</strong> {email}
            </Text>

            <Text>
              <strong>Phone:</strong> {phone}
            </Text>

            <Text>
              <strong>Company:</strong>{" "}
              {company || "N/A"}
            </Text>

            <Text>
              <strong>Service:</strong>{" "}
              {service}
            </Text>

            <Text>
              <strong>Budget:</strong>{" "}
              {budget || "Not Specified"}
            </Text>

            <Text>
              <strong>Timeline:</strong>{" "}
              {timeline || "Not Specified"}
            </Text>

            <Hr />

            <Heading
              style={{
                fontSize: "22px",
              }}
            >
              Project Description
            </Heading>

            <Text
              style={{
                whiteSpace: "pre-wrap",
                lineHeight: "28px",
              }}
            >
              {message}
            </Text>
          </Section>

          <Section
            style={{
              background: "#fafafa",
              padding: "24px",
              textAlign: "center",
              fontSize: "13px",
              color: "#777",
            }}
          >
            <Text>
              This inquiry was submitted from
              the Capiche Labs website.
            </Text>

            <Text>
              © {new Date().getFullYear()} Capiche Labs
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}