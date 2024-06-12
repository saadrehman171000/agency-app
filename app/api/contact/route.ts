import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

// Configure your SMTP server details
const transporter = nodemailer.createTransport({
  host: "your-smtp-host", // Example: "smtp.example.com"
  port: 587, // Example: 587 for TLS, 465 for SSL
  secure: false, // Set to true if using SSL
  auth: {
    user: "your-smtp-username",
    pass: "your-smtp-password",
  },
});

async function sendEmail(email: any, fullName: any) {
  try {
    await transporter.sendMail({
      from: "your-sender-email",
      to: email,
      subject: "Thank you for your submission",
      text: `Dear ${fullName},\n\nThank you for submitting the form.`,
    });
    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, message } = await req.json();

    const newContact = await prisma.contact.create({
      data: {
        fullName,
        email,
        phone,
        message,
      },
    });

    const emailSent = await sendEmail(email, fullName);

    if (!emailSent) {
      return NextResponse.json(
        { error: "Failed to send confirmation email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { contact: newContact, success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
