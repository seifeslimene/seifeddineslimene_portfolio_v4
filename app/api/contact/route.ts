// File: app/api/contact/route.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_RECEIVER) {
    return NextResponse.json({ message: "Email is not configured" }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      to: process.env.SMTP_RECEIVER,
      subject: subject,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
