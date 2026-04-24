"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  
  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Main content stagger
    gsap.fromTo(
      ".hero-element",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
    );

    // Scroll indicator animation
    gsap.to(".scroll-line", {
      y: 8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, { scope: containerRef });

  const scrollToDemo = () => {
    window.scrollTo({ top: 1500, behavior: "smooth" });
  };

  return (
    <>
      <section ref={containerRef} className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-24">
        <div className="text-center z-10 max-w-4xl">
          <span className="hero-element inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-neutral-500 uppercase bg-neutral-100 rounded-full">
            AI-Powered Automation
          </span>
          <h1 className="hero-element text-6xl md:text-8xl font-bold tracking-tight mb-8 text-black leading-[1.1]">
            Browse beyond <br />
            <span className="text-neutral-400 font-light italic">boundaries.</span>
          </h1>
          <p className="hero-element text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Experience the next generation of browser automation. Simple English commands, complex execution. Built for modern builders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToDemo}
              className="hero-element w-full sm:w-auto px-10 py-5 bg-black text-white rounded-full font-bold shadow-2xl shadow-black/20 transition-all hover:bg-neutral-900 hover:scale-105 active:scale-95"
            >
              Launch Agent
            </button>
            <button
              onClick={() => setIsDemoOpen(true)}
              className="hero-element w-full sm:w-auto px-10 py-5 bg-white text-black border border-neutral-200 rounded-full font-bold transition-all hover:bg-neutral-50 hover:scale-105 active:scale-95"
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* Scroll indicator - Minimalist */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30">
          <div className="scroll-line w-[1px] h-12 bg-black" />
        </div>
      </section>

      {/* Demo Modal */}
      {isDemoOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setIsDemoOpen(false)}
        >
          <div 
            className="relative w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden border border-neutral-200 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MacOS Window Control Bar */}
            <div className="flex bg-[#f3f3f3] h-10 items-center px-4 gap-2 border-b border-neutral-200">
              <button 
                onClick={() => setIsDemoOpen(false)}
                className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] flex items-center justify-center group"
                title="Close"
              >
                 <span className="opacity-0 group-hover:opacity-100 text-[9px] font-bold text-black/50 leading-none">✕</span>
              </button>
              <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F]"></div>
            </div>
            
            {/* GIF Container */}
            <div className="w-full relative bg-neutral-950 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/demo.gif" 
                alt="AutoBrowse Demo" 
                className="w-full h-auto block object-contain max-h-[80vh]" 
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
