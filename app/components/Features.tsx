"use client";

import { useRef } from "react";
import { Laptop, Cpu, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });

  const features = [
    {
      title: "Universal Control",
      description: "Automate any web application, regardless of complexity or framework. From SaaS to Legacy.",
      icon: <Laptop className="w-6 h-6 text-black" />
    },
    {
      title: "Agentic Intelligence",
      description: "Powered by advanced LLMs that understand your intent and navigate like a human.",
      icon: <Cpu className="w-6 h-6 text-black" />
    },
    {
      title: "Enterprise Grade",
      description: "Encrypted, secure, and built for scale. Your automation runs in isolated, professional environments.",
      icon: <ShieldCheck className="w-6 h-6 text-black" />
    }
  ];

  return (
    <section ref={containerRef} id="features" className="px-4 py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto w-full">
        <div ref={headerRef} className="mb-20 text-left border-l-2 border-black pl-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Built for the modern web.
          </h2>
          <p className="text-neutral-500 max-w-xl font-light text-lg">
            AutoBrowse provides the infrastructure to turn any browser into an autonomous worker.
          </p>
        </div>

        <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-card group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-neutral-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
              <p className="text-neutral-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
