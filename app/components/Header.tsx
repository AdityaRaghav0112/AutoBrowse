"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full transition-all duration-300 z-50 fixed top-0 left-0 ${
        scrolled 
          ? "bg-black/60 backdrop-blur-md border-b border-white/10 shadow-lg shadow-brand-purple/5 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo element */}
          <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(157,78,221,0.5)]">
            N
          </div>
          <span className="font-bold text-xl tracking-tight text-white">AutoBrowse</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'Demo', 'Pricing'].map((item) => (
            <Link
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group tracking-wider uppercase"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-cyan transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <button className="hidden md:block px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-full border border-white/20 backdrop-blur-sm transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(157,78,221,0.4)] hover:border-brand-purple/50 uppercase tracking-widest">
          Launch App
        </button>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-white/80 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
        </button>
      </div>
    </motion.header>
  );
}
