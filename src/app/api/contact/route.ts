import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, projectType, budget, message } = body;

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide your valid full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please describe your project or operational problem (at least 10 characters)." },
        { status: 400 }
      );
    }

    const submissionId = `inq_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 7)}`;
    const timestamp = new Date().toISOString();

    const leadData = {
      id: submissionId,
      timestamp,
      name: name.trim(),
      email: email.trim(),
      organization: organization ? String(organization).trim() : "Not provided",
      projectType: projectType || "General AI / Automation Inquiry",
      budget: budget || "Not specified",
      message: message.trim(),
    };

    // Log the inquiry to the server console for audit trail
    console.log("[INCOMING_INQUIRY]", JSON.stringify(leadData, null, 2));

    // Optional webhook forwarding if DISCORD_WEBHOOK / SLACK_WEBHOOK / CONTACT_WEBHOOK is set
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `New Portfolio Lead from **${leadData.name}** (${leadData.email})\nOrg: ${leadData.organization}\nType: ${leadData.projectType}\nBudget: ${leadData.budget}\nMessage: ${leadData.message}`,
          }),
        });
      } catch (err) {
        console.error("Webhook forwarding failed:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been successfully received by Sulisumen Peter. You will receive a direct technical response within 24 business hours.",
      referenceId: submissionId,
      timestamp,
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your inquiry. Please try again or reach out directly via Calendly or LinkedIn." },
      { status: 500 }
    );
  }
}
