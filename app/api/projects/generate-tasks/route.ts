import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, description, aim, marketing, stack, category } = await req.json();

    const prompt = `You are a project manager at a software company called Logizon Technologies.

Given this project brief, generate a comprehensive set of tasks broken down by section.

Project Name: ${name}
Category: ${category}
Description: ${description}
Aim: ${aim}
Marketing Plan: ${marketing}
Tech Stack: ${stack.join(", ")}

Generate tasks for each of these 5 sections: design, backend, web, mobile, others.
For each section, create 3-6 specific, actionable tasks relevant to this project.

Respond ONLY with valid JSON in this exact format:
{
  "tasks": [
    {
      "section": "design",
      "title": "Task title",
      "description": "Brief description of what needs to be done",
      "priority": "high|medium|low",
      "estimatedDays": 2
    }
  ]
}

Make tasks specific to the project — not generic. Consider the tech stack and category.`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || "{}";

    // Strip markdown fences if present
    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    return NextResponse.json({ success: true, tasks: parsed.tasks });
  } catch (error) {
    console.error("AI task generation error:", error);
    return NextResponse.json({ success: false, error: "Failed to generate tasks" }, { status: 500 });
  }
}
