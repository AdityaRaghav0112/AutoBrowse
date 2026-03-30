import { NextResponse } from 'next/server';
import { runBrowser } from '../../server/run';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    
    if (!prompt) {
      return NextResponse.json({ success: false, error: "Prompt is required" }, { status: 400 });
    }

    // Pass the user's prompt to the browser-use server function
    const result = await runBrowser(prompt);
    
    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json({ success: false, error: error.message || String(error) }, { status: 500 });
  }
}
