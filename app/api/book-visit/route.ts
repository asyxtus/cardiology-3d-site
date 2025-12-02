// app/api/book-visit/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      phone,
      preferredDate,
      preferredTime,
      reason,
    } = body as {
      fullName?: string;
      phone?: string;
      preferredDate?: string;
      preferredTime?: string;
      reason?: string;
    };

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: "Full name and phone are required." },
        { status: 400 }
      );
    }

    const toEmail = process.env.BOOKING_TO_EMAIL;
    const fromEmail = process.env.BOOKING_FROM_EMAIL;

    if (!toEmail || !fromEmail) {
      console.error("Missing BOOKING_TO_EMAIL or BOOKING_FROM_EMAIL env variables");
      return NextResponse.json(
        { error: "Email configuration error." },
        { status: 500 }
      );
    }

    const subject = `New heart visit request from ${fullName}`;

    const textContent = `
New booking request from the website

Name: ${fullName}
Phone / WhatsApp: ${phone}
Preferred date: ${preferredDate || "Not specified"}
Preferred time: ${preferredTime || "Not specified"}

Reason for visit:
${reason || "Not specified"}
    `;

    const htmlContent = `
      <h2>New booking request from the website</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
      <p><strong>Preferred date:</strong> ${
        preferredDate || "Not specified"
      }</p>
      <p><strong>Preferred time:</strong> ${
        preferredTime || "Not specified"
      }</p>
      <p><strong>Reason for visit:</strong></p>
      <p>${reason ? reason.replace(/\n/g, "<br />") : "Not specified"}</p>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error in /api/book-visit:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
