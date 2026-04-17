import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, isPatient } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "info@parikhhealth.com";
    const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "noreply@parikhhealth.com";

    const htmlBody = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#0F1F3D;border-bottom:2px solid #C9A465;padding-bottom:8px">
          New Message from ParikhHealth Website
        </h2>
        <table style="width:100%;border-collapse:collapse;margin:16px 0">
          <tr><td style="padding:6px 12px;background:#f5f5f5;font-weight:600;width:160px">Name</td><td style="padding:6px 12px">${name}</td></tr>
          <tr><td style="padding:6px 12px;background:#f5f5f5;font-weight:600">Email</td><td style="padding:6px 12px"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 12px;background:#f5f5f5;font-weight:600">Phone</td><td style="padding:6px 12px">${phone || "—"}</td></tr>
          <tr><td style="padding:6px 12px;background:#f5f5f5;font-weight:600">Patient?</td><td style="padding:6px 12px">${isPatient === "yes" ? "Yes — existing patient" : "No — new patient"}</td></tr>
          <tr><td style="padding:6px 12px;background:#f5f5f5;font-weight:600">Subject</td><td style="padding:6px 12px">${subject}</td></tr>
        </table>
        <h3 style="color:#0F1F3D">Message</h3>
        <div style="background:#f9f9f9;border-left:3px solid #C9A465;padding:12px 16px;white-space:pre-wrap">${message}</div>
        <p style="color:#999;font-size:12px;margin-top:24px">
          Submitted ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PT via parikhhealth.com
        </p>
      </div>
    `;

    if (process.env.SENDGRID_API_KEY) {
      // SendGrid — same key used by the AR platform
      const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: TO_EMAIL }] }],
          from: { email: FROM_EMAIL, name: "ParikhHealth Website" },
          reply_to: { email, name },
          subject: `[Website Contact] ${subject} — ${name}`,
          content: [{ type: "text/html", value: htmlBody }],
        }),
      });
      if (!res.ok) {
        const err = await res.text();
        console.error("[SendGrid Error]", err);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
      }
    } else {
      // Dev fallback — log to console
      console.log("[Contact Form — no email provider configured]", {
        to: TO_EMAIL,
        name, email, phone, subject, message, isPatient,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
