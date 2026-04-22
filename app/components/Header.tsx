"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: string
  ) => {
    if (item === "Features") {
      e.preventDefault();
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#features");
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full transition-all duration-300 z-50 fixed top-0 left-0 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-neutral-200 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" onClick={()=> window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-black flex items-center justify-center font-bold text-white transition-transform group-hover:scale-105">
            AB
          </div>
          <span className="font-bold text-xl tracking-tight text-black">AutoBrowse</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {['Features', 'Docs', 'Pricing'].map((item) => (
            <Link
              key={item}
              href={item === "Features" ? "/#features" : `/${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item)}
              className="text-sm font-medium text-neutral-600 hover:text-black transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-medium text-neutral-600 hover:text-black transition-colors">
            Log in
          </button>
          <button className="px-5 py-2 bg-black text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-all">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-black/70 hover:text-black"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-neutral-100 bg-white shadow-xl"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {['Features', 'Docs', 'Pricing'].map((item) => (
                <Link
                  key={item}
                  href={item === "Features" ? "/#features" : `/${item.toLowerCase()}`}
                  onClick={(e) => { handleNavClick(e, item); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-neutral-600 hover:text-black transition-colors"
                >
                  {item}
                </Link>
              ))}
              <hr className="border-neutral-100" />
              <button className="w-full px-5 py-3 bg-black text-white text-lg font-semibold rounded-xl hover:bg-neutral-800 transition-all">
                Get Started
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}