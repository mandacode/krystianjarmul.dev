import { NextResponse } from "next/server";
import { LINKS } from "@/lib/content";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const MAX_MESSAGE = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const { email, message, website } = (body ?? {}) as {
    email?: string;
    message?: string;
    website?: string;
  };

  // Honeypot: real people leave this hidden field empty.
  if (website) return NextResponse.json({ ok: true });

  const from = email?.trim() ?? "";
  const text = message?.trim() ?? "";

  if (!EMAIL_RE.test(from) || from.length > 320) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (text.length < 10 || text.length > MAX_MESSAGE) {
    return NextResponse.json({ error: "invalid_message" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.CONTACT_FROM ?? "Contact form <onboarding@resend.dev>";
  const recipient = process.env.CONTACT_TO ?? LINKS.email;

  // Without a key the endpoint stays functional in local dev: the message is logged
  // instead of sent, so the form flow can be exercised end to end.
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY missing, message not sent", { from });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: from,
      subject: `krystianjarmul.dev - message from ${from}`,
      text: `From: ${from}\n\n${text}`,
      html: `<p><strong>From:</strong> ${escapeHtml(from)}</p><p>${escapeHtml(text).replace(/\n/g, "<br />")}</p>`,
    }),
  });

  if (!res.ok) {
    // Surface Resend's own message (unverified domain, test-mode recipient, ...) in the logs.
    console.error("[contact] Resend %s: %s", res.status, await res.text());
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
