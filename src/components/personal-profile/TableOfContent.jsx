import React from "react";
import { motion } from "framer-motion";

const sections = [
  { name: "Experience", emoji: "💼" },
  { name: "Projects", emoji: "🚀" },
  { name: "Skills", emoji: "🛠️" },
  { name: "Non-Negotiables", emoji: "⚖️" },
  { name: "Hobbies", emoji: "🎮" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TableOfContent = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24 text-gray-900">
      {/* Title Section */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-wow-green">
          Table of Content
        </h2>
      </div>

      {/* Animated Grid Layout */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-[hsla(0,0%,100%,0.5)] rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
            variants={itemVariants}
          >
            <span className="text-4xl md:text-5xl">{section.emoji}</span>
            <p className="text-gray-700 mt-2 text-lg md:text-xl font-semibold">
              {section.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TableOfContent;
