
export default function Introduction() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Introduction</h1>
        <p className="text-lg text-black/70 leading-relaxed">
          Welcome to the AutoBrowse documentation. AutoBrowse is a powerful, AI-driven automation
          tool built to navigate the web just like a human, completing complex multi-step processes
          autonomously.
        </p>
      </div>

      <div className="p-6 rounded-xl border border-black/10 bg-white shadow-sm space-y-4">
        <h2 className="text-2xl font-semibold text-black">Why AutoBrowse?</h2>
        <ul className="space-y-4 text-black/70">
          <li className="flex items-start">
            <span className="text-black mr-4 mt-1">✦</span>
            <div>
              <strong className="text-black block mb-1">Intelligent Navigation</strong>
              <span>Agents understand natural language objectives and figure out the steps required.</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-4 mt-1">✦</span>
            <div>
              <strong className="text-black block mb-1">Resilience to UI Changes</strong>
              <span>Say goodbye to broken CSS selectors. AutoBrowse sees elements visually.</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-4 mt-1">✦</span>
            <div>
              <strong className="text-black block mb-1">Developer Friendly</strong>
              <span>Simple API to integrate powerful browser agents into your own workflow tools.</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="pt-4 border-t border-black/10">
        <h2 className="text-2xl font-semibold mb-4">How it works?</h2>
        <ul className="ml-5 list-disc flex flex-col gap-1">
          <li>Uses <a href="https://browser-use.com/" className="underline" target="_blank">browser-use</a> for the backend and Navigation through the websites.</li>
          <li>Can work with any LLM provided the api key (e.g., OpenAI, Gemini, etc.)</li>
          <li>Uses <a href="https://github.com/adityaraghuvanshi0/autobrowse" className="underline" target="_blank">AutoBrowse</a> for the frontend and UI.</li>
          <li>The scraping can be done using a different or the same API or LLM. It uses a custom Python script developed by AutoBrowse</li>
        </ul>
      </div>
    </div>
  );
}