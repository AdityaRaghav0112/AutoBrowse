"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { useRef, useState } from "react";

export default function Use() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSubmit = async () => {
    if (!prompt.trim() || isLoading) return;
    
    setIsLoading(true);
    try {
      const response = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      console.log("API Response:", data);
    } catch (error) {
      console.error("Failed to run browser-use:", error);
    } finally {
      setIsLoading(false);
      setPrompt("");
      // Optional: Clear or leave prompt, depending on UX. Leaving it for now.
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent new line
      handleSubmit();
    }
  };

  return (
    <section id="demo" className="py-24 px-4 relative z-10 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">AI Powered</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What do you want to automate?
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Describe your task in plain english. Our browser agent will take over and execute it seamlessly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-3xl mx-auto group"
        >
          <div className="absolute -inset-1 bg-white rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-black/60 backdrop-blur-3xl border border-white/10 rounded-3xl flex flex-col md:flex-row shadow-2xl focus-within:ring-1 focus-within:ring-white/50 transition-all items-end">
            <textarea
              ref={textareaRef}
              value={prompt}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="e.g., Search for properties in Gurugram and save the PIDs..."
              className="w-full bg-transparent text-white px-6 py-6 outline-none resize-none text-lg md:text-xl placeholder:text-gray-600 min-h-[80px] overflow-hidden"
              style={{ maxHeight: "400px" }}
              disabled={isLoading}
            />
            <button 
              onClick={handleSubmit}
              disabled={isLoading || !prompt.trim()}
              className="md:mt-0 mt-4 w-full md:w-auto bg-white text-black p-5 m-2 rounded-2xl flex items-center justify-center transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] md:ml-2 font-bold tracking-wider disabled:opacity-50 disabled:pointer-events-none"
            >
              <span className="md:hidden mr-2">{isLoading ? "STARTING..." : "EXECUTE"}</span>
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