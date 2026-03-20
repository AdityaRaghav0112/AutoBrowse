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
          <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(0,245,212,0.5)] border-2 border-black" />
          <h2 className="text-xl font-semibold mb-3">1. Installation</h2>
          <p className="text-white/70 mb-4 text-sm">Install the CLI and packages through npm.</p>
          <div className="bg-[#111] border border-white/10 rounded-lg p-4 font-mono text-sm text-white/90">
            npm install autobrowse
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="relative pl-8 before:absolute before:left-0 before:top-3 before:bottom-[-32px] before:w-[2px] before:bg-white/10 last:before:hidden">
          <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-brand-purple shadow-[0_0_10px_rgba(157,78,221,0.5)] border-2 border-black" />
          <h2 className="text-xl font-semibold mb-3">2. Configuration</h2>
          <p className="text-white/70 mb-4 text-sm">Set up your API key. Create a <code>.env</code> file in your directory.</p>
          <div className="bg-[#111] border border-white/10 rounded-lg p-4 font-mono text-sm overflow-x-auto text-white/90">
            AUTOBROWSE_API_KEY=your_api_key_here
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="relative pl-8">
          <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(0,212,255,0.5)] border-2 border-black" />
          <h2 className="text-xl font-semibold mb-3">3. First Script</h2>
          <p className="text-white/70 mb-4 text-sm">Run a simple navigation task using the client.</p>
          <div className="bg-[#111] border border-white/10 rounded-lg p-4 font-mono text-sm overflow-x-auto text-white/90">
            <pre className="whitespace-pre">
{`import { AutoBrowse } from 'autobrowse';

const agent = new AutoBrowse({
  apiKey: process.env.AUTOBROWSE_API_KEY
});

// The agent will reason about how to achieve this goal
const result = await agent.run({
  task: 'Go to github.com and find the trending repositories today'
});

console.log('Result:', result.data);`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
