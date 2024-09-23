import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "iconsax-react";
import Clinton from "./../assets/clinton.jpg";

const experiences = [
  {
    title: "Frontend Engineer",
    company: "Octave Labs Limited",
    date: "November 2022 - Present",
    responsibilities: [
      "Collaborated closely with product designers to interpret design requirements and translate them accurately into responsive, visually appealing user interfaces using React.",
      "Developed and maintained frontend components and user interfaces in React, focusing on functionality, interactivity, and data integration for seamless user experiences.",
      "Collaborated effectively with backend engineers to integrate frontend components with backend APIs for smooth data flow and functionality.",
      "Served as a key member of a cross-functional team, working with backend engineers and product designers from ideation to market launch, actively involved in planning, development, and deployment phases.",
      "Enhanced user experience by creating intuitive interfaces, optimizing performance, and ensuring cross-browser and cross-device compatibility.",
      "Adhered to best practices, coding standards, and version control systems to uphold code quality, maintainability, and scalability.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJS",
      "Redux",
      "REST API",
      "Payment Integration",
    ],
    url: "https://octave.ng",
  },
  {
    title: "React Native Mobile Developer",
    company: "Freelance",
    date: "June 2024 - Present",
    responsibilities: [
      "Developed a books app with React Native for purchasing, reading books, and tracking reading goals.",
      "Integrated Strapi backend for seamless data flow and enhanced functionality.",
      "Implemented a search feature to simplify book discovery within the app.",
      "Incorporated in-app notifications for updated book releases.",
      "Performed comprehensive testing and debugging to maintain app performance and stability.",
    ],
    technologies: ["React Native", "JavaScript", "REST API", "Expo", "Strapi"],
    url: "https://youtu.be/EovJngWt78k",
  },
  {
    title: "Software Programmer",
    company: "Boulos Enterprises Limited",
    date: "May 2021 - May 2022",
    responsibilities: [
      "Collaborated with the engineering team to create an e-commerce application for Lamberet, increasing website conversions by over 50%",
      "Improved internal software for managing products, storage, and sales, boosting factory production by 30%.",
      " Resolved bugs to enhance stability and efficiency of current software",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJS",
      "Bootstrap",
      "PHP",
      "MySQL",
    ],
    url: "https://boulos.ng",
  },
  {
    title: "Frontend Engineer, Intern",
    company: "Thrive Agric Limited",
    date: "Dec 2018 - Jul 2019",
    responsibilities: [
      " Collaborated with the design team on mobile app prototypes.",
      "Improved internal software for managing products, storage, and sales, boosting factory production by 30%.",
      "Implemented data migration from WordPress Admin to Google Sheets, boosting investor success rate and satifaction.",
    ],
    technologies: [
      "ReactJS",
      "CSS3",
      "React Native",
      "HTML5",
      "JavaScript",
      "Figma",
      "Git",
      "WordPress",
    ],
    url: "https://thriveagric.com",
  },
];

// Animation variants for the entire card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.2, // Stagger children animations within the card
    },
  },
};

// Animation variants for the title
const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

// Animation variants for the responsibilities
const responsibilitiesVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1, // Each responsibility appears one after the other
    },
  },
};

// Animation variants for each responsibility item
const responsibilityItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

// Animation variants for the technologies container
const techContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Delay each technology for smooth stagger effect
    },
  },
};

// Animation variants for each technology item
const techItemVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, type: "spring", bounce: 0.4 },
  },
};

// Animation variants for the About Me section
const aboutMeVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const Experience = () => {
  const handleResumeClick = () => {
    window.open(
      "https://res.cloudinary.com/dbdgevqyn/image/upload/v1726652153/Clinton_Adabanya_-_Frontend_Engineer_N.pdf",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col md:flex-row bg-cream-light px-4 md:px-16 pt-12 md:pt-24 md:space-x-16 space-y-8 md:space-y-0">
      {/* Left section - About Me */}
      <motion.div
        id="about"
        className="w-full md:w-1/2 md:py-8 md:sticky md:top-0 h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={aboutMeVariants}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-wow-green">
          About Me
        </h2>
        <div className="">
          <motion.div className="border-2 border-black w-2/3 sm:w-60 relative rounded-full hidden md:block">
            <div className="absolute inset-0 bg-black rounded-full transform -rotate-6 -translate-x-2 sm:-translate-x-3 translate-y-2 sm:translate-y-3 blur-md opacity-70"></div>
            <motion.img
              src={Clinton}
              alt="Clinton portrait"
              className="relative z-10 rounded-full w-60 h-60 object-cover object-top"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            />
          </motion.div>
          <p className="text-xl italic mt-8">
            My journey into tech began on September 21st, 2016, when I wrote my
            first "Hello World" as an undergraduate at Covenant University,
            studying Computer Science.
          </p>
          <p className="mt-4">
            Since then, I’ve built and deployed web applications across
            industries like FinTech, Sports, Manufacturing, and Agriculture,
            collaborating with teams to bring impactful digital solutions to
            life.
          </p>
          <p className="mt-4">
            When I’m not coding, I enjoy watching football, playing FIFA,
            listening to music, or reading books on theology.
          </p>
        </div>
      </motion.div>

      {/* Right section - Experience */}
      <div id="experience" className="w-full md:w-1/2 md:p-8 space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-wow-green">
          Work Experience
        </h2>

        {/* Loop through experiences array */}
        {experiences.map((experience, index) => (
          <motion.a
            key={index}
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-6 md:px-6 md:py-8 hover:border-black hover:rounded-3xl hover:shadow-md hover:bg-white hover:bg-opacity-30 hover:border-opacity-50 transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants} // Apply card animation
          >
            <div className="space-y-4">
              {/* Title and company */}
              <motion.div variants={titleVariants}>
                <h4 className="text-lg md:text-2xl font-bold text-wow-green">
                  {experience.title} -{" "}
                  <span className="underline">{experience.company}</span>
                </h4>
                <p className="italic text-wow-gray">{experience.date}</p>
              </motion.div>

              {/* Responsibilities */}
              <motion.ul
                className="list-disc ml-4 text-base text-wow-gray"
                variants={responsibilitiesVariants}
              >
                {experience.responsibilities.map((responsibility, idx) => (
                  <motion.li key={idx} variants={responsibilityItemVariants}>
                    {responsibility}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Technologies used */}
              <motion.div
                className="flex flex-wrap gap-2 mt-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={techContainerVariants}
              >
                {experience.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="px-4 py-1 text-xs font-acorn bg-green-100 border border-green-200 text-green-800 rounded-full transition duration-300 hover:bg-green-200"
                    variants={techItemVariants}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.a>
        ))}
        <motion.button
          onClick={handleResumeClick}
          className="w-60 mt-8 py-4 bg-wow-green text-white rounded-full shadow-md transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
        >
          <span
            href="#experience"
            className="flex justify-center items-center m-auto gap-2"
          >
            View Full Résumé
            <div className="ml-2 -rotate-45">
              <ArrowRight size="24" />
            </div>
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default Experience;
