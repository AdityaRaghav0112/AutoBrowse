"use client";
import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Use from "./components/Use";
import InteractiveFeatures from './components/InteractiveFeatures';
import LoadingScreen from './components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      <main className="relative min-h-screen bg-[#fafafa]">
        <div className="relative z-10 w-full">
          <Hero />
          <InteractiveFeatures />
          <div className=" mx-auto px-4 py-24 space-y-32">
            <Use />
            {/* <Features /> */}
            <Features/>
          </div>

          <footer className="border-t border-neutral-200 bg-white py-12 text-center text-sm text-neutral-500">
            <div className="max-w-7xl mx-auto px-4">
              <p>© 2026 AutoBrowse – Intelligent Browser Automation. Built for speed.</p>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}