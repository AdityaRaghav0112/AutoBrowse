"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: string
  ) => {
    if (item === "Features") {
      e.preventDefault();

      // If already on home page, just scroll
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to home first, then scroll after load
        router.push("/#features");
      }
    }
    // For all other items, Link handles routing normally
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full transition-all duration-300 z-50 fixed top-0 left-0 ${
        scrolled
          ? "bg-neutral-950 border-b border-neutral-800 shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" onClick={()=> window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 cursor-default">
          <div className="w-8 h-8 rounded bg-white flex items-center justify-center font-bold text-black shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            AB
          </div>
          <span className="font-bold text-xl tracking-tight text-white">AutoBrowse</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'Docs', 'Pricing'].map((item) => (
            <Link
              key={item}
              href={item === "Features" ? "/#features" : `/${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group tracking-wider uppercase"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <button className="hidden md:block px-6 py-2.5 bg-neutral-800 hover:bg-white text-white hover:text-black text-sm font-semibold rounded-full border border-neutral-700 transition-all hover:border-white uppercase tracking-widest">
          Launch App
        </button>

        <button className="md:hidden text-white/80 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
        </button>
      </div>
    </motion.header>
  );
}