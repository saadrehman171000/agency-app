import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

// Use environment variables for sensitive information
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function sendEmail(email: any, firstName: any) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for your submission",
      text: `Dear ${firstName},\n\nThank you for submitting the form.`,
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
    const {
      firstName,
      lastName,
      email,
      phone,
      services,
      NoOfServices,
      comments,
    } = await req.json();

    const newQuote = await prisma.quote.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        services: services,
        NoOfServices: NoOfServices,
        comments: comments,
      },
    });

    const emailSent = await sendEmail(email, firstName);

    if (!emailSent) {
      return NextResponse.json(
        { error: "Failed to send confirmation email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { quote: newQuote, success: true },
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
