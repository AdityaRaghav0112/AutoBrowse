import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

export async function runBrowser(prompt: string) {
  console.log("Executing backend Python script for browser-use with prompt:", prompt);
  
  try {
    // Note: ensure the user has installed browser-use and langchain-google-genai in their Python environment
    const command = `.venv/bin/python server/agent.py "${prompt.replace(/"/g, '\\"')}"`;
    
    const { stdout, stderr } = await execPromise(command);
    
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