"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-100"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-black text-black tracking-tight"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Yusuf PM
          </motion.a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/case-studies">Case Studies</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="hidden md:block px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-black hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-6 py-6 space-y-4">
              <MobileNavLink href="/" onClick={closeMobileMenu}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={closeMobileMenu}>
                About
              </MobileNavLink>
              <MobileNavLink href="/case-studies" onClick={closeMobileMenu}>
                Case Studies
              </MobileNavLink>
              <MobileNavLink href="#projects" onClick={closeMobileMenu}>
                Projects
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={closeMobileMenu}>
                Contact
              </MobileNavLink>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="block w-full px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors text-sm text-center"
              >
                Let's Work Together
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
}

function MobileNavLink({
  href,
  children,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block text-lg font-semibold text-black hover:text-gray-600 transition-colors py-2"
    >
      {children}
    </a>
  );
}
