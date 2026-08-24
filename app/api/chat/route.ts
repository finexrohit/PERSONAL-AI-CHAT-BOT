import { google } from "@ai-sdk/google";
import { frontendTools } from "@assistant-ui/ai-sdk";
import { convertToModelMessages, streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, system, tools } = await req.json();
  const result = streamText({
    model: google(process.env.GEMINI_MODEL ?? "gemini-3.6-flash"),
    providerOptions: {
      google: {
        thinkingConfig: {
          thinkingLevel: "minimal",
        },
      },
    },
    system,
    messages: await convertToModelMessages(messages),
    tools: frontendTools(tools),
  });
  return result.toUIMessageStreamResponse();
}