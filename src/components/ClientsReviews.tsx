"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Mark is an extraordinary and talented designer who merges without meticulous detail. He creations are not only visually appealing but also deeply resonate with users' needs.",
    name: "Michael Torres",
    position: "Founder & CEO",
  },
  {
    quote: "Mark is a remarkable creative force who blends artistic vision with technical skill. His work is characterized by its sophistication, insightfulness, and a strong user-centric.",
    name: "Jessica Harper",
    position: "Project Manager",
  },
  {
    quote: "Mark is a gifted designer who harmonizes creativity with precision. Her projects are always stylish, considerate, and focused on enhancing the user experience.",
    name: "Sophia Lin",
    position: "Founder",
  },
  {
    quote: "Mark is an exceptional talent who fuses imaginative concepts with technical expertise. His designs are refined, purposeful, and consistently prioritize the user.",
    name: "Emily Zhang",
    position: "Creative Director",
  },
  {
    quote: "Mark is an extraordinary and talented designer who merges without meticulous detail. He creations are not only visually appealing but also deeply resonate with users' needs.",
    name: "Michael Torres",
    position: "Founder & CEO",
  },
];

export default function ClientsReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 lg:py-32 px-8 sm:px-12 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black mb-16 lg:mb-24 tracking-tight"
        >
          Clients Reviews
        </motion.h2>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] flex-shrink-0"
              >
                <div className="bg-white rounded-3xl p-8 sm:p-10 h-full flex flex-col shadow-sm">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                  </div>

                  {/* Quote Text */}
                  <p className="text-base sm:text-lg text-black leading-relaxed mb-8 flex-grow">
                    {testimonial.quote}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar Placeholder */}
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div>
                      <p className="font-bold text-black">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-black w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
