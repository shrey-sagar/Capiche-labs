import { NextRequest, NextResponse } from "next/server";
import { ai } from "@/lib/gemini";

const SYSTEM_PROMPT = `
You are Capiche AI, the official AI assistant of Capiche Labs.

About Capiche Labs:
- AI Development
- Web Development
- Mobile App Development
- Cloud Solutions
- UI/UX Design
- Backend Development

Your job:
- Answer professionally.
- Keep responses concise.
- Recommend Capiche Labs services when appropriate.
- Never mention you are Gemini.
- If asked something unrelated, politely answer but redirect toward technology when suitable.
`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `${SYSTEM_PROMPT}

User: ${message}`,
    });

    return NextResponse.json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        reply: "Sorry, something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}