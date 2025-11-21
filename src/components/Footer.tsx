"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA Section */}
      <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
              Let's Work Together
            </h2>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's create
              something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="mailto:hello@yusuf.pm"
                className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="#work"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-colors"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-gray-800 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Yusuf</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Product Manager & Designer creating meaningful digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-gray-300 hover:text-white transition-colors">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400">
                Connect
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com" className="text-gray-300 hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com" className="text-gray-300 hover:text-white transition-colors">
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400">
                Newsletter
              </h4>
              <p className="text-gray-400 text-sm">
                Get updates on new projects and articles.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 Yusuf. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
