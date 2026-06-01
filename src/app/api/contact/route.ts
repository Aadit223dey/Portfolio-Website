import { NextResponse } from "next/server";

/**
 * API route to handle secure client contact form submissions.
 * Connects directly to Resend email system if RESEND_API_KEY is configured.
 */
export async function POST(request: Request) {
  try {
    const { name, email, projectType, budget, message } = await request.json();

    // Perform server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill out all required fields (Name, Email, and Message)." },
        { status: 400 }
      );
    }

    console.log("CONTACT FORM SUBMISSION LOG:", { name, email, projectType, budget, message });

    const apiKey = process.env.RESEND_API_KEY;
    
    if (apiKey) {
      // Dynamic import to avoid build errors if the library is not installed in other developer environments
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      
      const emailResponse = await resend.emails.send({
        from: "Aether Dev Portfolio <portfolio@aidensterling.dev>",
        to: "hello@aidensterling.dev",
        subject: `New Project Inquiry from ${name} (${projectType})`,
        text: `
          Name: ${name}
          Email: ${email}
          Project Type: ${projectType}
          Estimated Budget: ${budget}
          
          Message:
          ${message}
        `,
      });

      console.log("Resend API response:", emailResponse);
    } else {
      console.log("RESEND_API_KEY environment variable is missing. Mocking success response.");
    }

    // Success response
    return NextResponse.json(
      { message: "Thank you! Your message was submitted successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { error: error?.message || "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
