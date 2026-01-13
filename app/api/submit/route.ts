import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic server-side validation can be added here using Zod schema too

        const submission = await prisma.submission.create({
            data: {
                name: body.name,
                email: body.email,
                businessType: body.businessType,
                teamSize: body.teamSize,
                painPoints: JSON.stringify(body.painPoints), // Store array as JSON string
                goal: body.goal,
                budget: body.budget,
            },
        });

        // Trigger N8N Automation
        try {
            await fetch("https://agencia-ia-madrid.app.n8n.cloud/webhook/blueprint", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
        } catch (webhookError) {
            console.error("N8N Webhook Failed:", webhookError);
            // Continue execution, do not fail the request to client
        }


        return NextResponse.json({ success: true, id: submission.id });
    } catch (error) {
        console.error("Submission Error:", error);
        return NextResponse.json(
            { success: false, error: "Error submitting form" },
            { status: 500 }
        );
    }
}
