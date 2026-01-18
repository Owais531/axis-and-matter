/* eslint-disable @typescript-eslint/no-explicit-any */

import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

// Set SendGrid API key
sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req: Request) {
  try {
    // Parse the incoming request body
    const body = await req.json();

    // Send email using SendGrid
    await sendgrid.send({
      to: body.to,
      from: body.from,
      subject: body.subject,
      html: body.message,
    });

    // Return success response
    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    // Handle errors
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode || 500 }
    );
  }
}
