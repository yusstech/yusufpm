"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Boldstream",
    tags: ["Marketing", "Web design", "Development"],
    description: "Assess your distinct requirements and effortlessly incorporate our AI solutions into your current are frameworks. The next stage concentrates optimizing our AI tools to enhance productivity.",
  },
  {
    title: "CloudSync Platform",
    tags: ["SaaS", "UI/UX", "Cloud"],
    description: "A comprehensive cloud synchronization platform designed to streamline workflow and enhance team collaboration across multiple devices and locations.",
  },
  {
    title: "HealthTrack App",
    tags: ["Mobile", "Healthcare", "Design"],
    description: "Revolutionary health monitoring application that empowers users to track fitness goals, nutrition, and wellness metrics with intelligent insights.",
  },
  {
    title: "EduLearn Portal",
    tags: ["Education", "Web App", "Development"],
    description: "Interactive learning management system that transforms education through engaging content delivery and real-time progress tracking.",
  },
];

export default function RecentProjects() {
  return (
    <section id="projects" className="py-24 lg:py-32 px-8 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black mb-16 lg:mb-24 tracking-tight"
        >
          Recent Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-[3rem] sm:rounded-[4rem] p-8 sm:p-12 lg:p-16 shadow-lg"
            >
              {/* Left Side - Project Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-8">
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-black">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                {/* View Full Project Button */}
                <div>
                  <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2 group">
                    View full Project
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Side - Project Image */}
              <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[300px] bg-gray-100 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <button className="bg-black text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-800 transition-colors inline-flex items-center gap-3 group">
            See All Projects
            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
