"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Yusuf's strategic thinking and design expertise helped us transform our product. The results exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: null,
  },
  {
    quote: "Working with Yusuf was a game-changer. His ability to balance user needs with business goals is exceptional.",
    author: "Michael Chen",
    role: "CTO, InnovateCo",
    avatar: null,
  },
  {
    quote: "The best product manager we've worked with. Yusuf brings clarity, vision, and execution excellence to every project.",
    author: "Emily Rodriguez",
    role: "VP Product, GrowthLabs",
    avatar: null,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tight mb-4">
            Client Reviews
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            What people say about working with me.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string | null;
}

function TestimonialCard({ quote, author, role, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-gray-50 rounded-3xl p-8 h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div className="space-y-4">
        {/* Quote Icon */}
        <svg className="w-10 h-10 text-black opacity-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        {/* Quote */}
        <p className="text-gray-700 leading-relaxed text-lg">
          "{quote}"
        </p>
      </div>

      {/* Author */}
      <div className="mt-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 font-semibold text-sm">
            {author.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <div className="font-bold text-black">{author}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </div>
  );
}
