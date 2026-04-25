"use client";
import Hero from './components/Hero';
import Features from './components/Features';
import Use from "./components/Use";
import InteractiveFeatures from './components/InteractiveFeatures';
import Features2 from './components/Features2';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fafafa]">
      <div className="relative z-10 w-full">
        <Hero />
        <InteractiveFeatures />
        <div className=" mx-auto px-4 py-24 space-y-32">
          <Use />
          {/* <Features /> */}
          <Features2/>
        </div>

        <footer className="border-t border-neutral-200 bg-white py-12 text-center text-sm text-neutral-500">
          <div className="max-w-7xl mx-auto px-4">
            <p>© 2026 AutoBrowse – Intelligent Browser Automation. Built for speed.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}