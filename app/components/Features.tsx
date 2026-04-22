"use client";

import { motion } from "framer-motion";
import { Laptop, Cpu, ShieldCheck } from "lucide-react";

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

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
    <section id="features" className="px-4 py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-20 text-left border-l-2 border-black pl-8">
          <motion.h2 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-black mb-4"
          >
            Built for the modern web.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neutral-500 max-w-xl font-light text-lg"
          >
            AutoBrowse provides the infrastructure to turn any browser into an autonomous worker.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={childVariants}
              className="group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-neutral-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
              <p className="text-neutral-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
