"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-white text-shadow-sm">
          AutoBrowse
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed backdrop-blur-sm bg-black/10 p-2 rounded-lg">
          Experience the future of digital innovation. Immersive web design powered by cutting-edge spatial technology.
        </p>
        <motion.button
          onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold relative overflow-hidden group transition-colors hover:text-black"
        >
          <span className="relative z-10 tracking-widest uppercase text-sm">Get Started Now</span>
          <div className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
        </motion.button>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
