"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 lg:py-24 px-8 sm:px-12 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Row - Social Links and Back to Top */}
        <div className="flex justify-between items-center mb-16 lg:mb-24">
          {/* Social Links */}
          <div className="flex gap-8">
            <a
              href="https://instagram.com/yussufpm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors font-medium"
            >
              Instagram
            </a>
            <a
              href="https://x.com/yussuf_pm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors font-medium"
            >
              X.com
            </a>
            <a
              href="https://linkedin.com/in/yusufmuhammed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors font-medium"
            >
              LinkedIn
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="text-black hover:text-gray-600 transition-colors font-medium flex items-center gap-2 group"
          >
            Back To Top
            <svg
              className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          {/* Large CTA Text */}
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black mb-12 tracking-tight leading-tight">
            Let's Work<br />Together
          </h2>

          {/* Book a Call Button */}
          <button className="bg-white border-2 border-black text-black px-10 py-4 rounded-full text-base font-semibold hover:bg-black hover:text-white transition-all inline-flex items-center gap-2 group">
            Book a Free Strategy Call
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>

        {/* Bottom Row - Copyright and Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-200">
          {/* Left Side - Copyright */}
          <div className="text-sm text-gray-600">
            <span>© {new Date().getFullYear()} Yusuf Muhammed. All rights reserved.</span>
          </div>

          {/* Right Side - Navigation */}
          <nav className="flex gap-8 text-sm">
            <a href="/" className="text-black hover:text-gray-600 transition-colors font-medium">
              Home
            </a>
            <a href="#projects" className="text-black hover:text-gray-600 transition-colors font-medium">
              Projects
            </a>
            <a href="#services" className="text-black hover:text-gray-600 transition-colors font-medium">
              Services
            </a>
            <a href="/about" className="text-black hover:text-gray-600 transition-colors font-medium">
              About
            </a>
            <a href="#blog" className="text-black hover:text-gray-600 transition-colors font-medium">
              Blog
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
