import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

// Only create Resend instance if key exists
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      reason,
      preferredDate,
      preferredTime,
      language,
    } = body;

    // If no email provider configured yet – still accept the booking
    if (!resend) {
      console.warn(
        "Resend API key missing – skipping email sending but returning success.",
      );

      return NextResponse.json(
        {
          success: true,
          message:
            "Appointment request received, but email sending is not yet configured on the server.",
        },
        { status: 200 },
      );
    }

    // ✅ Only tries to send email if resend is initialized
    await resend.emails.send({
      from: "Appointments <no-reply@yourdomain.com>",
      to: ["youremail@yourdomain.com"],
      subject: "New cardiology appointment request",
      html: `
        <h2>New appointment request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p><strong>Preferred date:</strong> ${preferredDate}</p>
        <p><strong>Preferred time:</strong> ${preferredTime}</p>
        <p><strong>Language:</strong> ${language}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error handling booking request:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while processing your request.",
      },
      { status: 500 },
    );
  }
}
