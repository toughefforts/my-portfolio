import { NextRequest, NextResponse } from "next/server";

/**
 * Next.js Contact Form Route Handler.
 * Validates the submission payload and attempts forwarding to the Python FastAPI backend.
 * If the standalone backend is offline, gracefully handles and logs the submission locally.
 */
export async function POST(req: NextRequest) {

  try {
    const body = await req.json();
    const { name, email, message } = body;

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

    // Try forwarding to Python backend if it's running
    const pythonBackendUrl = process.env.BACKEND_API_URL || "http://localhost:8000";
    try {
      const response = await fetch(`${pythonBackendUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
        signal: AbortSignal.timeout(2000), // 2s timeout
      });

      if (response.ok) {
        const data = await response.json();
        return NextResponse.json(data);
      }
    } catch {
      // Backend not running; fallback to successful local ingestion
    }

    console.log(`[Contact Form Received] From: ${name} <${email}>, Message: ${message}`);

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received. I will reply within 24 hours.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
