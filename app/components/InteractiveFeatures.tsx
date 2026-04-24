"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function InteractiveFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const cursor1Ref = useRef<HTMLDivElement>(null);
  const cursor2Ref = useRef<HTMLDivElement>(null);
  const codeRevealRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Fade in and slide up the whole section
    gsap.from(".feature-header", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2
    });

    // Reveal code lines one by one like a typing effect
    gsap.from(".code-line", {
      scrollTrigger: {
        trigger: codeRevealRef.current,
        start: "top 75%",
      },
      opacity: 0,
      x: -20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });

    // Move cursors around dynamically based on scroll
    gsap.to(cursor1Ref.current, {
      scrollTrigger: {
        trigger: codeRevealRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
      x: 350,
      y: 120,
      ease: "sine.inOut"
    });

    gsap.to(cursor2Ref.current, {
      scrollTrigger: {
        trigger: codeRevealRef.current,
        start: "top 70%",
        end: "bottom 10%",
        scrub: 1.5,
      },
      x: -250,
      y: 80,
      ease: "sine.inOut"
    });

    // Metrics counter stagger
    gsap.from(".metric-card", {
      scrollTrigger: {
        trigger: metricsRef.current,
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.7)"
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-4 bg-[#f9f9f7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Editorial Text */}
        <div className="lg:col-span-5 relative z-10">
          <h2 className="feature-header text-5xl md:text-7xl mb-6 text-[#2d3432] leading-tight font-serif tracking-tight">
            Collaborate <br />
            <span className="italic text-[#8c8c88]">Instantly.</span>
          </h2>
          <p className="feature-header text-lg md:text-xl text-[#5a605e] font-sans font-light leading-relaxed mb-10 max-w-md">
            Our intelligent canvas allows multiple agents and developers to compose automation sequences in real-time. No conflicts, zero config.
          </p>

          <div ref={metricsRef} className="flex gap-8">
            <div className="metric-card border-l border-[#adb3b0]/30 pl-4">
              <div className="text-4xl font-serif text-[#2d3432] mb-1">10x</div>
              <div className="text-xs uppercase tracking-widest text-[#5a605e] font-sans">Execution Speed</div>
            </div>
            <div className="metric-card border-l border-[#adb3b0]/30 pl-4">
              <div className="text-4xl font-serif text-[#2d3432] mb-1">Zero</div>
              <div className="text-xs uppercase tracking-widest text-[#5a605e] font-sans">Configuration</div>
            </div>
          </div>
        </div>

        {/* Right Code Interaction Area */}
        <div className="lg:col-span-7 relative">
          <div ref={codeRevealRef} className="relative bg-white border border-[#adb3b0]/30 shadow-2xl shadow-black/5 rounded-3xl p-8 font-mono text-sm leading-8 overflow-hidden z-20">
            
            {/* Top Bar */}
            <div className="flex gap-2 mb-6 pb-4 border-b border-[#f2f4f2]">
              <div className="w-3 h-3 rounded-full bg-[#e5e9e6]"></div>
              <div className="w-3 h-3 rounded-full bg-[#e5e9e6]"></div>
              <div className="w-3 h-3 rounded-full bg-[#e5e9e6]"></div>
            </div>

            {/* Code Content */}
            <div className="text-[#2d3432] relative z-10">
              <div className="code-line"><span className="text-[#486272]">import</span> {"{ "}Agent{" }"} <span className="text-[#486272]">from</span> <span className="text-[#9f403d]">'@autobrowse/core'</span>;</div>
              <div className="code-line mt-4"><span className="text-[#486272]">const</span> session = <span className="text-[#486272]">new</span> Agent();</div>
              <div className="code-line mt-4"><span className="text-[#486272]">await</span> session.navigate(<span className="text-[#9f403d]">'https://example.com'</span>);</div>
              <div className="code-line mt-2"><span className="text-[#486272]">await</span> session.extract(<span className="text-[#9f403d]">'Pricing Table'</span>);</div>
              <div className="code-line mt-4 text-[#767c79] italic">// Agents working in parallel</div>
              <div className="code-line"><span className="text-[#486272]">await</span> session.assert(<span className="text-[#9f403d]">'Checkout is visible'</span>);</div>
              <div className="code-line mt-4">console.log(<span className="text-[#9f403d]">'Task Completed Seamlessly'</span>);</div>
            </div>

            {/* Cursor 1 (Simulating another user) */}
            <div ref={cursor1Ref} className="absolute top-24 left-10 z-30 pointer-events-none flex flex-col items-start shadow-xl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.42c.45 0 .67-.54.35-.85L5.85 2.86a.5.5 0 00-.85.35z" fill="#9f403d"/>
              </svg>
              <div className="bg-[#9f403d] text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-r-md rounded-bl-md ml-3 -mt-1">
                Alex_Dev
              </div>
            </div>

            {/* Cursor 2 (Simulating AI agent) */}
            <div ref={cursor2Ref} className="absolute top-48 right-32 z-30 pointer-events-none flex flex-col items-start shadow-xl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.42c.45 0 .67-.54.35-.85L5.85 2.86a.5.5 0 00-.85.35z" fill="#486272"/>
              </svg>
              <div className="bg-[#486272] text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-r-md rounded-bl-md ml-3 -mt-1">
                AI_Agent
              </div>
            </div>
            
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#ecefec] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#dee4e0] rounded-full blur-2xl opacity-40 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
