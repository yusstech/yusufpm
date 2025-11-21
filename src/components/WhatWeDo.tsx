"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Build for Users",
    content: "I design products based on behavior, not opinions. Users don't care about features, they care about outcomes. I build products people actually use, not just products that look good in demos."
  },
  {
    title: "Speak Technical",
    content: "I started as an engineer. I understand your architecture, can review PRs, and make technical tradeoffs confidently. Your engineering team won't waste time translating. I already speak their language."
  },
  {
    title: "Drive Business",
    content: "Every product decision ties to revenue, cost, or strategic positioning. I don't build features, I drive outcomes that move the business forward. ROI isn't an afterthought, it's the starting point."
  },
];

export default function WhatWeDo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 px-8 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black mb-16 lg:mb-24 tracking-tight"
        >
          What I do?
        </motion.h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Top Text */}
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
                Designed for Innovators.<br />
                Engineered for Excellence.
              </h3>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I bridge engineering, product, and business. Most PMs speak one language. I speak all three because I've lived in each world. The result? Products that ship faster, work better, and drive real revenue.
            </p>
          </motion.div>

          {/* Right Side - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full group flex items-center justify-between py-6 text-left hover:border-black transition-colors"
                >
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                    {service.title}
                  </span>
                  <motion.svg
                    className="w-8 h-8 text-black shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed pb-6">
                        {service.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
