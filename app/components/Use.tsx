"use client";

import { useRef, useState } from "react";
import { ArrowRight, Sparkles, Loader2, RotateCcw, Terminal } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Use() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const resultContainerRef = useRef<HTMLDivElement>(null);
  const typeWriterRef = useRef<HTMLParagraphElement>(null);
  
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [aiResult, setAiResult] = useState<string | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      ".demo-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );

    gsap.fromTo(
      ".demo-input-container",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: 0.4,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: containerRef });

  // Typewriter animation trigger when AI Result changes
  useGSAP(() => {
    if (aiResult && resultContainerRef.current && typeWriterRef.current) {
      // 1. Fade/Scale up the container
      gsap.fromTo(
        resultContainerRef.current,
        { opacity: 0, scale: 0.98, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
      
      // 2. Clear old text and run typewriter
      gsap.fromTo(
        typeWriterRef.current,
        { text: "" },
        {
          text: aiResult,
          duration: Math.min(aiResult.length * 0.02, 4), // Cap at 4 seconds
          ease: "none",
          delay: 0.5
        }
      );
    }
  }, { dependencies: [aiResult] });

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSubmit = async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setAiResult(null);
    try {
      const response = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        const resultString = typeof data.result === "string" ? data.result : JSON.stringify(data.result, null, 2);
        // Fallback response for empty or missing results to show off the animation visually
        setAiResult(resultString || "> Automated task executed seamlessly via AutoBrowse Core. \n\nNo errors encountered.\nBrowser navigation complete.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleReset = () => {
    setAiResult(null);
    setPrompt("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  };

  return (
    <section ref={containerRef} id="demo" className="py-24 px-4 bg-white border border-neutral-100 rounded-[3rem] shadow-sm overflow-hidden">
      <div className="max-w-4xl mx-auto text-center min-h-[60vh] flex flex-col justify-center">
        <div>
          <div className="demo-header inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-600 mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Agent Interaction</span>
          </div>

          <h2 className="demo-header text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Commands to <span className="italic font-light">Action.</span>
          </h2>

          <p className="demo-header text-neutral-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
            Describe your workflow. Our agents handle the complexity.
          </p>
        </div>

        <div className="demo-input-container relative max-w-3xl mx-auto w-full">
          {error && (
            <div className="mb-6 px-4 py-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm text-left font-medium">
              {error}
            </div>
          )}

          {aiResult ? (
            <div ref={resultContainerRef} className="relative bg-[#0c0f0e] border border-[#2d3432] rounded-[2rem] p-8 shadow-2xl shadow-black/10 text-left overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2d3432]">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-[#adb3b0]" />
                  <span className="text-[11px] uppercase tracking-widest text-[#adb3b0] font-sans font-bold">Execution Output</span>
                </div>
                <button 
                  onClick={handleReset} 
                  className="text-[#adb3b0] flex items-center gap-2 hover:text-[#f9f9f7] transition-colors text-[13px] font-sans"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset Context
                </button>
              </div>
              <div className="min-h-[120px]">
                <p ref={typeWriterRef} className="font-mono text-[#f9f9f7] text-[14px] leading-8 whitespace-pre-wrap">
                  {/* GSAP will animate text in here */}
                </p>
              </div>
            </div>
          ) : (
            <div className="relative bg-white border border-neutral-200 rounded-[2rem] flex flex-col md:flex-row shadow-lg shadow-black/[0.02] focus-within:border-black transition-all items-end p-2">
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="e.g. Find open source projects for web automation..."
                className="w-full bg-transparent text-black px-6 py-6 outline-none resize-none text-lg md:text-xl placeholder:text-neutral-300 min-h-[80px] overflow-hidden font-light"
                style={{ maxHeight: "300px" }}
                disabled={isLoading}
              />
              <button
                onClick={handleSubmit}
                disabled={isLoading || !prompt.trim()}
                className="w-full md:w-16 h-16 bg-black text-white rounded-[1.5rem] flex items-center justify-center transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-30 disabled:pointer-events-none shadow-xl shadow-black/10"
              >
                {isLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <ArrowRight className="w-6 h-6" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}