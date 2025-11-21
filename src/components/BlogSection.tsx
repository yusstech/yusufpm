"use client";

import { motion } from "framer-motion";

const articles = [
  {
    title: "The Future of Product Design",
    excerpt: "Exploring emerging trends in product design and how AI is reshaping the creative process.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Design",
  },
  {
    title: "Building Products Users Love",
    excerpt: "A framework for creating products that resonate with users and drive business growth.",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    category: "Product",
  },
  {
    title: "From Idea to Launch",
    excerpt: "My process for taking a product from initial concept to successful market launch.",
    date: "Nov 10, 2024",
    readTime: "6 min read",
    category: "Strategy",
  },
];

export default function BlogSection() {
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
            Blog & Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Thoughts on product, design, and building better digital experiences.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ArticleCard {...article} />
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#blog"
            className="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all"
          >
            View All Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

function ArticleCard({ title, excerpt, date, readTime, category }: ArticleCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <div className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Article Image Placeholder */}
        <div className="aspect-[16/10] bg-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-300">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="px-3 py-1 bg-white rounded-full font-medium">{category}</span>
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 leading-relaxed line-clamp-2">
            {excerpt}
          </p>

          {/* Read More Link */}
          <div className="pt-2 flex items-center text-black font-medium group-hover:gap-2 transition-all">
            <span>Read More</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
