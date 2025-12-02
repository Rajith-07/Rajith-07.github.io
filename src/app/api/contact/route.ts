import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("Missing SMTP credentials. Check your .env.local file.");
      return NextResponse.json(
        { error: "Email service not configured. Please contact the site administrator." },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("SMTP connection verification failed:", verifyError);
      return NextResponse.json(
        { error: "Email service configuration error. Please check your SMTP settings." },
        { status: 500 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || "rajithsrr@gmail.com";

    // Email to you (notification)
    const notificationMail = {
      from: process.env.SMTP_USER,
      to: recipientEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; margin-top: 10px;">${message}</p>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            You can reply directly to this email to respond to ${name} at ${email}
          </p>
        </div>
      `,
      replyTo: email,
    };

    // Thank you email to the user
    const thankYouMail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank you for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b;">Thank you for contacting me!</h2>
          <p style="color: #475569; line-height: 1.6;">
            Hi ${name},
          </p>
          <p style="color: #475569; line-height: 1.6;">
            Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.
          </p>
          <p style="color: #475569; line-height: 1.6;">
            Best regards,<br>
            <strong>Rajith S</strong>
          </p>
        </div>
      `,
    };

    // Send both emails with individual error handling
    let notificationSent = false;
    let thankYouSent = false;

    try {
      await transporter.sendMail(notificationMail);
      notificationSent = true;
    } catch (notifError) {
      console.error("Failed to send notification email:", notifError);
    }

    try {
      await transporter.sendMail(thankYouMail);
      thankYouSent = true;
    } catch (thankYouError) {
      console.error("Failed to send thank you email:", thankYouError);
    }

    // If at least one email was sent, consider it a partial success
    if (notificationSent || thankYouSent) {
      return NextResponse.json(
        { 
          message: notificationSent && thankYouSent 
            ? "Email sent successfully" 
            : "Message received (some emails may have failed)" 
        },
        { status: 200 }
      );
    }

    // If both failed, return error
    throw new Error("Both emails failed to send");

  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    
    // Provide more helpful error messages
    if (errorMessage.includes("Invalid login") || errorMessage.includes("authentication")) {
      return NextResponse.json(
        { error: "Email authentication failed. Please check your SMTP credentials." },
        { status: 500 }
      );
    }
    
    if (errorMessage.includes("ECONNREFUSED") || errorMessage.includes("timeout")) {
      return NextResponse.json(
        { error: "Could not connect to email server. Please check your SMTP settings." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}

