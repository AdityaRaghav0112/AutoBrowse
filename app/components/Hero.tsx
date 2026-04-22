"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 max-w-4xl"
      >
        <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-neutral-500 uppercase bg-neutral-100 rounded-full">
          AI-Powered Automation
        </span>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-black leading-[1.1]">
          Browse beyond <br />
          <span className="text-neutral-400 font-light italic">boundaries.</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Experience the next generation of browser automation. Simple English commands, complex execution. Built for modern builders.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            onClick={() => window.scrollTo({ top: 850, behavior: "smooth" })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-full font-bold shadow-2xl shadow-black/20 transition-all hover:bg-neutral-900"
          >
            Launch Agent
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-10 py-5 bg-white text-black border border-neutral-200 rounded-full font-bold transition-all hover:bg-neutral-50"
          >
            Watch Demo
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll indicator - Minimalist */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-black" />
      </motion.div>
    </section>
  );
}
