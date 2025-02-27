import React from "react";
import { motion } from "framer-motion";
import CharlesIsidiFeedback from "./../../assets/we_feedback.jpg";

const WorkExperienceFeedback = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Text Column */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-wow-green">
          Work Experience Feedback
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I have had the opportunity to collaborate with dynamic teams, work on
          exciting projects, and contribute to building digital solutions that
          solve real-world problems. Here are some testimonials from people I've
          worked with.
        </p>
      </motion.div>

      {/* Image Column */}
      <motion.div
        className="overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <img
          src={CharlesIsidiFeedback}
          alt="Work Experience Feedback"
          className="w-full object-contain"
        />
      </motion.div>
    </section>
  );
};

export default WorkExperienceFeedback;
