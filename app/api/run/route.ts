import { NextResponse } from 'next/server';
import { runBrowser } from '../../server/run';

const MAX_PROMPT_LENGTH = 2000;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ success: false, error: "Prompt must be a non-empty string" }, { status: 400 });
    }

    if (prompt.trim().length === 0) {
      return NextResponse.json({ success: false, error: "Prompt cannot be empty" }, { status: 400 });
    }

    if (prompt.length > MAX_PROMPT_LENGTH) {
      return NextResponse.json({ success: false, error: `Prompt must be ${MAX_PROMPT_LENGTH} characters or less` }, { status: 400 });
    }

    // Pass the user's prompt to the browser-use server function
    const result = await runBrowser(prompt.trim());

    return NextResponse.json({ success: true, result });
  } catch (error: unknown) {
    console.error("API Route Error:", error);
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
