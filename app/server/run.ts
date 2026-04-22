import { execFile } from 'child_process';
import util from 'util';

const execFilePromise = util.promisify(execFile);

export async function runBrowser(prompt: string) {
  console.log("Executing backend Python script for browser-use with prompt:", prompt);

  try {
    // Note: ensure the user has installed browser-use and langchain-google-genai in their Python environment
    // Using execFile with args array to prevent shell injection
    const { stdout, stderr } = await execFilePromise(
      '.venv/bin/python',
      ['app/server/agent.py', prompt]
    );
    
    if (stderr) {
      console.warn("Python execution warning/stderr:", stderr);
    }
    
    console.log("Python browser-use script finished successfully.");
    return stdout;
  } catch (error) {
    console.error("Error running python browser-use instance:", error);
    throw error;
  }
}