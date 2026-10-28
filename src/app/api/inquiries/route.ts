import { NextResponse } from "next/server";
import { sanitizeInquiry, validateInquiry } from "@/lib/validation";

// Receives inquiry submissions from the website.
// Delivery is handled by a webhook you configure (for example, a CRM, a
// Zapier/Make hook, or an email service). Without it, the endpoint returns
// an honest error instead of pretending the message was delivered.

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const input = sanitizeInquiry(body);
  if (!input) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const errors = validateInquiry(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Validation failed.", errors }, { status: 422 });
  }

  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      {
        error:
          "Inquiry delivery is not configured yet. Please email us directly or try again later.",
      },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...input,
        submittedAt: new Date().toISOString(),
        source: "breakoutusa-website",
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with ${response.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry delivery failed:", error);
    return NextResponse.json(
      { error: "We could not send your message right now. Please try again later." },
      { status: 502 },
    );
  }
}
