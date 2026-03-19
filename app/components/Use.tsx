"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function Use() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple mb-6">
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
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-black/60 backdrop-blur-3xl border border-white/10 rounded-3xl flex flex-col md:flex-row items-center shadow-2xl focus-within:ring-1 focus-within:ring-brand-cyan/50 transition-all items-end">
            <textarea
              ref={textareaRef}
              onChange={handleInput}
              rows={1}
              placeholder="e.g., Search for properties in Gurugram and save the PIDs..."
              className="w-full bg-transparent text-white px-6 py-4 outline-none resize-none text-lg md:text-xl placeholder:text-gray-600 min-h-[80px] overflow-hidden"
              style={{ maxHeight: "400px" }}
            />
            <button className="md:mt-0 mt-4 w-full md:w-auto bg-gradient-to-r from-brand-blue to-brand-purple text-white p-5 m-2 rounded-2xl flex items-center justify-center transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(157,78,221,0.6)] md:ml-2 font-bold tracking-wider">
              <span className="md:hidden mr-2">EXECUTE</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}