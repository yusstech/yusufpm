"use client";

import { motion } from "framer-motion";

const clients = [
  "Company A",
  "Company B",
  "Company C",
  "Company D",
  "Company E",
  "Company F",
  "Company G",
  "Company H",
];

export default function ClientsSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
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
            Latest Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Trusted by leading companies and innovative startups.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="aspect-[3/2] bg-white rounded-2xl flex items-center justify-center p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-gray-300 text-xl font-bold">
                {client}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
