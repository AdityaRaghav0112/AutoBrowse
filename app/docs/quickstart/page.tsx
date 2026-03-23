import CodeBlock from "../../components/CodeBlock";

export default function Quickstart() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Quickstart</h1>
        <p className="text-lg text-white/70 leading-relaxed">
          Get up and running with AutoBrowse in minutes. Follow these simple steps to
          launch your first automated agent.
        </p>
      </div>

      <div className="space-y-8 mt-4">
        {/* Step 1 */}
        <div className="relative pl-8 before:absolute before:left-0 before:top-3 before:bottom-[-32px] before:w-[2px] before:bg-white/10 last:before:hidden">
          <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] border-2 border-black" />
          <h2 className="text-xl font-semibold mb-3">1. Installation</h2>
          <p className="text-white/70 mb-4 text-sm">Clone the repository</p>
          <CodeBlock code={`git clone https://github.com/AdityaRaghav0112/AutoBrowse.git\nnpm i`} />
        </div>

        {/* Step 2 */}
        <div className="relative pl-8 before:absolute before:left-0 before:top-3 before:bottom-[-32px] before:w-[2px] before:bg-white/10 last:before:hidden">
          <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] border-2 border-black" />
          <h2 className="text-xl font-semibold mb-3">2. Configuration</h2>
          <p className="text-white/70 mb-4 text-sm">Set up your API key. Create a <code>.env</code> file your directory. You can use any LLM's API key</p>
          <CodeBlock code={`GEMINI_API_KEY=your_api_key_here
OPENAI_API_KEY=your_api_key_here`} />
        </div>

        {/* Step 3 */}
        {/* <div className="relative pl-8">
          <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] border-2 border-black" />
          <h2 className="text-xl font-semibold mb-3">3. First Script</h2>
          <p className="text-white/70 mb-4 text-sm">Run a simple navigation task using the client.</p>
          <CodeBlock code={`import { AutoBrowse } from 'autobrowse';

const agent = new AutoBrowse({
  apiKey: process.env.AUTOBROWSE_API_KEY
});

// The agent will reason about how to achieve this goal
const result = await agent.run({
  task: 'Go to github.com and find the trending repositories today'
});

console.log('Result:', result.data);`} />
        </div> */}
      </div>
    </div>
  );
}
