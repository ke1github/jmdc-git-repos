import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: "sales@jmdcenergy.com",
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: '"JMDC Energy Website" <sales@jmdcenergy.com>',
      to: "sales@jmdcenergy.com",
      subject: "New Quote Request",
      text: `
Name: ${data.name}
Email: ${data.email}
Contact: ${data.contact}
Organization: ${data.organization}
PIN Code: ${data.pincode}
Message: ${data.message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
