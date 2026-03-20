"use client";

import { motion } from "framer-motion";
import { Globe, Layers, Zap } from "lucide-react";

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const features = [
    {
      title: "3D Real-Time",
      description: "Render complex scenes instantly with cutting-edge spatial technology.",
      icon: <Zap className="w-8 h-8 text-brand-blue" />
    },
    {
      title: "Immersive Web",
      description: "Create deep, engaging user experiences with highly interactive 3D elements.",
      icon: <Globe className="w-8 h-8 text-brand-purple" />
    },
    {
      title: "Seamless Design",
      description: "Intuitive glassmorphism and beautiful micro-animations out of the box.",
      icon: <Layers className="w-8 h-8 text-brand-cyan" />
    }
  ];

  return (
    <section id="features" className="px-4 relative z-10 bg-gradient-to-t from-black via-black/90 to-transparent min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4"
          >
            Explore the Void
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Premium interfaces designed for the spatial computing era.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={childVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 50px -10px rgba(157, 78, 221, 0.4)",
                borderColor: "rgba(157, 78, 221, 0.5)"
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
