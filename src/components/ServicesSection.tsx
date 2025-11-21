"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Product Strategy",
    description: "Defining product vision, roadmaps, and go-to-market strategies aligned with business goals.",
    icon: "🎯",
  },
  {
    title: "UX/UI Design",
    description: "Creating intuitive, beautiful interfaces that users love and that drive business results.",
    icon: "✨",
  },
  {
    title: "Product Development",
    description: "Leading cross-functional teams to build and ship products from concept to launch.",
    icon: "🚀",
  },
  {
    title: "User Research",
    description: "Understanding user needs through interviews, testing, and data analysis to inform decisions.",
    icon: "🔍",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tight mb-4">
            What I Do
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I help companies build better products through strategic thinking and user-centered design.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="space-y-4">
        <div className="text-5xl">{icon}</div>
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
