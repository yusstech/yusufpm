"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
      {/* Top Info Text - Full width, outside container */}
      <motion.div
        className="absolute top-32 left-0 right-0 px-6 lg:px-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex items-start justify-between w-full text-lg sm:text-xl font-semibold">
          <div className="text-black">
            <p className="leading-tight">Hey there, I'm</p>
          </div>
          <div className="text-black text-center">
            <p className="leading-tight">Yusuf<br />Muhammed</p>
          </div>
          <div className="text-black text-right">
            <p className="leading-tight">Based in Abuja,<br />Working Worldwide</p>
          </div>
        </div>
      </motion.div>

      <div className="w-full px-6 lg:px-12 mt-32 sm:mt-40 lg:mt-48">

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 text-center max-w-6xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black leading-[0.95] tracking-tight mb-8">
            I Bridge Engineering,<br />Product & Business
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed w-full max-w-none mx-auto px-8 sm:px-12 md:px-16 lg:px-24">
            Technical Product Manager who helps companies build products engineers respect and customers pay for.
          </p>
        </motion.div>

        {/* Profile Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full"
        >
          {/* White card with shadow and decorative circles */}
          <div className="relative bg-white rounded-[3rem] sm:rounded-[4rem] shadow-2xl" style={{ padding: '50px' }}>
            {/* 4 decorative circles positioned at corners OUTSIDE the image */}
            <div className="absolute top-6 left-6 w-5 h-5 rounded-full bg-gray-300/70"></div>
            <div className="absolute top-6 right-6 w-5 h-5 rounded-full bg-gray-300/70"></div>
            <div className="absolute bottom-6 left-6 w-5 h-5 rounded-full bg-gray-300/70"></div>
            <div className="absolute bottom-6 right-6 w-5 h-5 rounded-full bg-gray-300/70"></div>

            {/* Wide horizontal pill-shaped image - full width */}
            <div className="relative rounded-[100px] sm:rounded-[140px] overflow-hidden bg-gray-100 w-full" style={{ height: '450px' }}>
              <Image
                src="/pro.jpg"
                alt="Yusuf Muhammed"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://calendly.com/yusstechh/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2 group"
          >
            Let's Work Together
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
