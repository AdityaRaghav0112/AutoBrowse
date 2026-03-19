import React from 'react';
import Scene from './components/Scene';
import Hero from './components/Hero';
import Features from './components/Features';
import Header from './components/Header'
import Use from "./components/Use";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 3D Background Fixed at the back */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <Scene />
      </div>

      <div className="relative z-10 w-full">
        <div className="absolute top-0 w-full z-50">
          <Header />
        </div>

        <Hero />
        <Use/>
        <Features />

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/80 backdrop-blur-md py-8 text-center text-sm text-gray-500">
          <p>© 2026 AutoBrowse Next-Gen 3D Web. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}