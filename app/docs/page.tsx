import Link from "next/link";

export default function Introduction() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-screen">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Introduction</h1>
        <p className="text-lg text-white/70 leading-relaxed">
          Welcome to the AutoBrowse documentation. AutoBrowse is a powerful, AI-driven automation 
          tool built to navigate the web just like a human, completing complex multi-step processes 
          autonomously.
        </p>
      </div>

      <div className="p-6 rounded-xl border border-white/10 bg-[#111] space-y-4">
        <h2 className="text-2xl font-semibold text-white">Why AutoBrowse?</h2>
        <ul className="space-y-4 text-white/70">
          <li className="flex items-start">
            <span className="text-white mr-4 mt-1">✦</span>
            <div>
              <strong className="text-white block mb-1">Intelligent Navigation</strong>
              <span>Agents understand natural language objectives and figure out the steps required.</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-4 mt-1">✦</span>
            <div>
              <strong className="text-white block mb-1">Resilience to UI Changes</strong>
              <span>Say goodbye to broken CSS selectors. AutoBrowse sees elements visually.</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-4 mt-1">✦</span>
            <div>
              <strong className="text-white block mb-1">Developer Friendly</strong>
              <span>Simple API to integrate powerful browser agents into your own workflow tools.</span>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="pt-4 border-t border-white/10">
        <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
        <p className="text-white/70">
          Ready to dive in? Head over to the <Link href="/docs/quickstart" className="text-white/70 hover:text-white transition-colors underline underline-offset-4">Quickstart guide</Link> to install 
          and configure your first agent in minutes.
        </p>
      </div>
    </div>
  );
}