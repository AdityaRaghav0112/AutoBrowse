"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingPage = () => {
  const tiers = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for exploring basic automation.",
      features: ["1,000 tasks/month", "Standard agent", "Community support"]
    },
    {
      name: "Pro",
      price: "$49",
      description: "Built for scaling builders and teams.",
      features: ["Unlimited tasks", "Premium fast agents", "Priority support", "Custom workflows"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations with custom needs.",
      features: ["SLA guarantees", "Dedicated infrastructure", "SSO & Security", "24/7 Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight"
          >
            Simple, <span className="font-light italic text-neutral-400">transparent</span> pricing.
          </motion.h1>
          <p className="text-xl text-neutral-500 font-light max-w-2xl mx-auto">
            Choose the plan that fits your execution needs. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white border ${tier.popular ? 'border-black' : 'border-neutral-100'} rounded-3xl p-10 flex flex-col shadow-sm transition-transform hover:scale-[1.01]`}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-black mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-black">{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-neutral-400 text-sm">/month</span>}
              </div>
              <p className="text-neutral-500 font-light mb-8 text-sm leading-relaxed">
                {tier.description}
              </p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-neutral-700">
                    <Check className="w-4 h-4 text-black" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${tier.popular ? 'bg-black text-white hover:bg-neutral-800' : 'bg-neutral-50 text-black border border-neutral-200 hover:bg-neutral-100'}`}>
                {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;