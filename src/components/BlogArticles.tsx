"use client";

import { motion } from "framer-motion";

const articles = [
  {
    date: "July 8, 2025",
    readTime: "10 minute read",
    title: "5 design principles that elevate your projects",
  },
  {
    date: "July 10, 2025",
    readTime: "5 minute read",
    title: "Lessons learned from my most challenging project",
  },
  {
    date: "July 30, 2025",
    readTime: "2 minute read",
    title: "How storytelling enhances your design and branding",
  },
];

export default function BlogArticles() {
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
          Blog & Articles
        </motion.h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Article Image */}
              <div className="relative aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Article Meta */}
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Article Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-black leading-tight group-hover:text-gray-700 transition-colors">
                {article.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
