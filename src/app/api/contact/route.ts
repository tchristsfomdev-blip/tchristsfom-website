import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  interestLabel?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const interest = body.interest?.trim() ?? "";
  const interestLabel = body.interestLabel?.trim() ?? interest;
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (
    name.length > 120 ||
    email.length > 180 ||
    phone.length > 40 ||
    message.length > 4000
  ) {
    return NextResponse.json(
      { error: "One or more fields are too long." },
      { status: 400 },
    );
  }

  // Enquiry intake — ready to wire to email/CRM. Logged in development for QA.
  const enquiry = {
    to: siteConfig.contact.email,
    name,
    email,
    phone: phone || null,
    interest: interest || null,
    interestLabel: interestLabel || null,
    message,
    receivedAt: new Date().toISOString(),
  };

  if (process.env.NODE_ENV !== "production") {
    console.info("[contact enquiry]", enquiry);
  }

  return NextResponse.json({ ok: true });
}
