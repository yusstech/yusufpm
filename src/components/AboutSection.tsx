"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 px-8 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* About Me Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-12 text-center"
        >
          <div className="bg-white rounded-full px-8 py-3 shadow-sm flex items-center gap-3">
            <span className="text-base font-bold text-black uppercase tracking-wider whitespace-nowrap">
              About Me
            </span>
            <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
            <span className="text-base font-bold text-black uppercase tracking-wider whitespace-nowrap">
              About Me
            </span>
          </div>
        </motion.div>

        {/* The Short Version */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-12 tracking-tight">
            The Short Version
          </h2>
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              <span className="font-bold text-black">Started:</span> Software engineer (built products for 15K+ users)
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              <span className="font-bold text-black">Became:</span> Product Manager (managed 12+ products)
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              <span className="font-bold text-black">Now:</span> Bridge between engineering, business, and users
            </p>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                <span className="font-bold text-black">Why it matters:</span> I've sat on both sides. I know what engineers need. I know what businesses need. I know what users need. I connect them all.
              </p>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="mt-12">
            <Link href="/about" className="bg-black text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2 group">
              Learn More About Me
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
