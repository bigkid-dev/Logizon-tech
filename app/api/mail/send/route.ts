import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { to, subject, body, attachments } = await req.json();

    if (!to || !subject || !body) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Build Resend payload
    const payload: Record<string, unknown> = {
      from: "Logizon Portal <noreply@logizon.tech>",
      to: Array.isArray(to) ? to : [to],
      subject,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; padding: 40px;">
          <img src="https://logizon.tech/logizon-logo.png" alt="Logizon" width="40" style="margin-bottom: 24px;" />
          <h2 style="font-size: 18px; margin-bottom: 16px; color: #111;">${subject}</h2>
          <div style="font-size: 14px; color: #444; line-height: 1.7;">${body.replace(/\n/g, "<br/>")}</div>
          <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 11px; color: #aaa;">Logizon Technologies · Ibadan, Nigeria · Sent via Staff Portal</p>
        </div>
      `,
    };

    // Attachments: Resend supports base64 attachments
    if (attachments && attachments.length > 0) {
      payload.attachments = attachments;
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err);
    }

    const result = await res.json();
    return NextResponse.json({ success: true, id: result.id });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json({ success: false, error: "Failed to send mail" }, { status: 500 });
  }
}
