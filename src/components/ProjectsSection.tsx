"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Boldstream",
    category: "Mobile App Design",
    description: "A modern streaming platform with focus on user experience and content discovery.",
    image: null,
  },
  {
    title: "E-commerce Dashboard",
    category: "Product Design",
    description: "Analytics dashboard for e-commerce businesses to track sales and customer insights.",
    image: null,
  },
  {
    title: "Fitness Tracker",
    category: "App Development",
    description: "Health and fitness tracking app with social features and AI-powered coaching.",
    image: null,
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
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
            Recent Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A selection of my recent work spanning product design, development, and strategy.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string | null;
}

function ProjectCard({ title, category, description, image }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
        {/* Project Image */}
        <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-300">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6 space-y-3">
          <div className="text-sm text-gray-500 font-medium">{category}</div>
          <h3 className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>

          {/* View Project Link */}
          <div className="pt-2 flex items-center text-black font-medium group-hover:gap-2 transition-all">
            <span>View Project</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
