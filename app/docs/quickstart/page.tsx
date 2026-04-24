import CodeBlock from "../../components/CodeBlock";

export default function Quickstart() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Quickstart</h1>
        <p className="text-lg text-black/70 leading-relaxed">
          Get up and running with AutoBrowse in minutes. Follow these simple steps to
          launch your first automated agent.
        </p>
      </div>

      <div className="space-y-8 mt-4">
        {/* Step 1 */}
        <div className="relative pl-8 before:absolute before:left-0 before:top-3 before:bottom-[-32px] before:w-[2px] before:bg-black/10 last:before:hidden">
          <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-black shadow-[0_0_10px_rgba(0,0,0,0.1)] border-2 border-[#fff]" />
          <h2 className="text-xl font-semibold mb-3">1. Installation</h2>
          <p className="text-black/70 mb-4 text-sm">Clone the repository</p>
          <CodeBlock code={`git clone https://github.com/AdityaRaghav0112/AutoBrowse.git\nnpm i`} />
        </div>

        {/* Step 2 */}
        <div className="relative pl-8 before:absolute before:left-0 before:top-3 before:bottom-[-32px] before:w-[2px] before:bg-black/10 last:before:hidden">
          <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-black shadow-[0_0_10px_rgba(0,0,0,0.1)] border-2 border-[#fff]" />
          <h2 className="text-xl font-semibold mb-3">2. Configuration</h2>
          <p className="text-black/70 mb-4 text-sm">Set up your API key. Create a <code>.env</code> file your directory. You can use any LLM&apos;s API key</p>
          <CodeBlock code={`GEMINI_API_KEY=your_api_key_here
OPENAI_API_KEY=your_api_key_here`} />
        </div>

        {/* Step 3 */}
        <div className="relative pl-8">
          <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-black shadow-[0_0_10px_rgba(0,0,0,0.1)] border-2 border-[#fff]" />
          <h2 className="text-xl font-semibold mb-3">3. Run on local</h2>
          <p className="text-black/70 mb-4 text-sm">Run a simple navigation task using the client.</p>
          <CodeBlock code={`npm run dev`} />
        </div>
      </div>
    </div>
  );
}
