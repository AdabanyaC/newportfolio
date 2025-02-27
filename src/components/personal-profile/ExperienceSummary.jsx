import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "iconsax-react";

const experiences = [
  {
    title: "Frontend Engineer",
    company: "Octave Labs Limited",
    date: "November 2022 - Present",
    summary:
      "Collaborated closely with product designers and backend engineers to build and optimize frontend components, ensuring seamless user experiences.",
  },
  {
    title: "React Native Mobile Developer",
    company: "Freelance",
    date: "June 2024 - Present",
    summary:
      "Developed a books app with React Native, integrating Strapi backend and implementing search and notification features.",
  },
  {
    title: "Software Programmer",
    company: "Boulos Enterprises Limited",
    date: "May 2021 - May 2022",
    summary:
      "Built an e-commerce platform for Lamberet, improving website conversions and enhancing internal management software for increased efficiency.",
  },
  {
    title: "Frontend Engineer, Intern",
    company: "Thrive Agric Limited",
    date: "Dec 2018 - Jul 2019",
    summary:
      "Worked with the design team on mobile app prototypes and facilitated data migration to improve investor success rates.",
  },
];

const ExperienceSummary = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 lg:py-48">
      <h2 className="text-4xl md:text-6xl font-bold text-wow-green mb-8">
        Work Experience
      </h2>
      <div className="relative border-l-4 border-wow-green pl-6 space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative p-6 lg:p-8 bg-[hsla(0,0%,100%,0.5)] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="absolute -left-3 top-8 w-6 h-6 bg-wow-green rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-semibold text-wow-green">
              {experience.title}
            </h3>
            <p className="text-gray-700 font-medium">{experience.company}</p>
            <p className="text-gray-500 italic text-sm">{experience.date}</p>
            <p className="mt-2 text-gray-600">{experience.summary}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSummary;
