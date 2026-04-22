"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { useRef, useState } from "react";

export default function Use() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSubmit = async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setSuccess(false);
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
        setSuccess(true);
        setPrompt("");
        if (textareaRef.current) textareaRef.current.style.height = "auto";
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

  return (
    <section id="demo" className="py-24 px-4 bg-white border border-neutral-100 rounded-[3rem] shadow-sm">
      <div className="max-w-4xl mx-auto text-center min-h-[60vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-600 mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Agent Interaction</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Commands to <span className="italic font-light">Action.</span>
          </h2>
          
          <p className="text-neutral-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
            Describe your workflow. Our agents handle the complexity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-3xl mx-auto w-full"
        >
          {error && (
            <div className="mb-6 px-4 py-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm text-left font-medium">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-6 px-4 py-3 rounded-lg bg-green-50 border border-green-100 text-green-700 text-sm text-left font-medium">
              Task successfully initiated.
            </div>
          )}

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
        </motion.div>
      </div>
    </section>
  );
}