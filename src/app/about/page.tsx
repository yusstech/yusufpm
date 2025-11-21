"use client";

import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-8 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black mb-24 tracking-tight"
          >
            About
          </motion.h1>

          {/* The Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-12 tracking-tight">
              The Magic I Couldn't Ignore
            </h2>
            <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg space-y-8">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                There's a moment in product development I've always loved, when you see all three pieces click together:
              </p>

              <div className="pl-6 space-y-3 border-l-4 border-black">
                <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed font-semibold">
                  A real user problem
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed font-semibold">
                  A technical solution that actually works
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed font-semibold">
                  Business value that makes it worth building
                </p>
              </div>

              <p className="text-xl sm:text-2xl md:text-3xl text-black leading-relaxed font-bold pt-4">
                That's the magic.
              </p>

              <div className="pt-6 border-t border-gray-200 space-y-6">
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Most engineers don't see it. They're handed specs. Build the solution. Ship it. Next ticket.
                </p>
                <p className="text-base sm:text-lg md:text-xl font-bold text-black leading-relaxed">
                  I couldn't do that.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Across logistics, e-commerce, fintech, health tech, SaaS. I kept asking: "Does this help users?" "Will they pay for it?" "Are we solving the right problem?"
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200 space-y-6">
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Even as an engineer, I'd dig into user behavior, analytics, and business models. My teammates thought it was weird. My managers didn't always appreciate it.
                </p>
                <p className="text-base sm:text-lg md:text-xl font-bold text-black leading-relaxed">
                  But the products I helped build succeeded, not because the code was better, but because we were building the right things.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200 space-y-6">
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  That's when I realized: I'm a product person who happens to know how to code. The transition to PM was natural. I was already doing it, just without the title.
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl text-black leading-relaxed font-bold pt-2">
                  Most people see one angle. Maybe two. I see all three. Always have.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed font-bold">
                  Because I've never been able to build something without asking: "Does this actually matter?"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-24"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-12 tracking-tight">
              Background
            </h2>
            <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-black">Education</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  <span className="font-bold text-black">B.Sc. Computer Science</span>
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Ahmadu Bello University
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-black">Experience</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Built products for <span className="font-bold text-black">15K+ users</span> across logistics, e-commerce, fintech, health tech, and SaaS
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Managed <span className="font-bold text-black">12+ products</span> from concept to launch
                </p>
              </div>
            </div>
          </motion.div>

          {/* What I Know */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-24"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-12 tracking-tight">
              What I Know
            </h2>
            <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                <span className="font-bold text-black">Engineering:</span> React Native, Node.js, APIs, databases, system design
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                <span className="font-bold text-black">Product:</span> Roadmaps, metrics, user research, prioritization
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                <span className="font-bold text-black">Business:</span> ROI, pricing, unit economics, GTM
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-base sm:text-lg md:text-xl font-bold text-black leading-relaxed">
                  The rare part: All three, not just one.
                </p>
              </div>
            </div>
          </motion.div>

          {/* How I Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-24"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-12 tracking-tight">
              How I Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <svg className="w-8 h-8 text-black shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black">Speed over perfection</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Ship and learn</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <svg className="w-8 h-8 text-black shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black">Outcomes over features</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Drive revenue, not just ship</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <svg className="w-8 h-8 text-black shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black">Truth over politics</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Tell you what you need to hear</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <svg className="w-8 h-8 text-black shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black">Teaching over gatekeeping</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Share frameworks, not hoard them</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Let's Work Together */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-24"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-12 tracking-tight">
              Let's Work Together
            </h2>
            <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg space-y-8">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-black">Fractional PM</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Early-stage companies needing senior PM without full-time hire
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-black">Consulting</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Specific challenges (strategy, roadmap, alignment)
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-black">Full-time</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Right company, right product, right team
                </p>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <motion.a
                  href="https://calendly.com/yusstechh/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Call
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
