import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Next.js Contact Form Route Handler.
 * Validates the submission payload and automatically sends an email to the portfolio owner
 * using Nodemailer / Gmail SMTP with full inquiry details and a 1-click reply-to header.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, subject } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 422 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "officialsachin9910@gmail.com";
    const smtpUser = process.env.SMTP_USER || "officialsachin9910@gmail.com";
    const smtpPass = process.env.SMTP_PASS?.trim().replace(/\s+/g, "");

    // Optional forwarding to standalone Python backend if running
    const pythonBackendUrl = process.env.BACKEND_API_URL || "http://localhost:8000";
    try {
      const payloadMessage = subject ? `[Subject: ${subject}]\n\n${message}` : message;
      await fetch(`${pythonBackendUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: payloadMessage }),
        signal: AbortSignal.timeout(1500),
      }).catch(() => null);
    } catch {
      // Graceful fallback if backend server is offline
    }

    // Send automated email notification via Nodemailer
    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const dateStr = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "short",
      });

      const mailOptions = {
        from: `"Portfolio Contact Form" <${smtpUser}>`,
        to: receiverEmail,
        replyTo: email,
        subject: `📬 New Portfolio Inquiry: ${subject || "General Message"} - from ${name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
            <div style="background: linear-gradient(135deg, #090d15 0%, #1e293b 100%); padding: 28px 32px; color: #ffffff;">
              <div style="display: inline-block; background: #fa4d56; color: #ffffff; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 6px; margin-bottom: 12px;">New Inquiry</div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">Portfolio Contact Form</h1>
              <p style="margin: 6px 0 0; color: #94a3b8; font-size: 13px;">Received on ${dateStr}</p>
            </div>
            
            <div style="padding: 32px;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600; width: 100px;">From:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 700;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">Email:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;"><a href="mailto:${email}" style="color: #fa4d56; text-decoration: none; font-weight: 600;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">Subject:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;">${subject || "Not specified"}</td>
                </tr>
              </table>

              <div style="margin-bottom: 8px; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Message Details:</div>
              <div style="background: #f8fafc; border-left: 4px solid #fa4d56; padding: 18px 20px; border-radius: 8px; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>

              <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; background: #090d15; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; padding: 12px 28px; border-radius: 10px;">Reply directly to ${name}</a>
              </div>
            </div>
            
            <div style="background: #f8fafc; padding: 16px 32px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 11px;">
              Sent via your Portfolio Inquiry Form • Delivered to ${receiverEmail}
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log(`[Email Sent Successfully] Inquiry from ${name} <${email}> delivered to ${receiverEmail}`);
    } else {
      console.warn(
        `[Email Notice] Form message received from ${name} <${email}>, but SMTP_PASS is not set in frontend/.env.local yet. Please set your 16-character Google App Password in .env.local to enable automatic delivery to ${receiverEmail}.`
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received. I will reply within 4 hours.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
