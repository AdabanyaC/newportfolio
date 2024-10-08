import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "iconsax-react";
import { staggerContainer } from "./../utils/motion";

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay: index * 0.4 },
  }),
};

const techContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Delay each child animation for smooth stagger effect
    },
  },
};

const techItemVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, type: "spring", bounce: 0.4 },
  },
};

const imageVariants = {
  hidden: { scale: 0.9 },
  visible: { scale: 1, transition: { duration: 0.5 } },
};

const projectTitleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Football O' Clock",
      imageUrl:
        "https://res.cloudinary.com/dbdgevqyn/image/upload/v1726662609/Screenshot_479.png",
      projectUrl: "https://footballoclock.com",
      description:
        "I integrated a Contentful API to manage live football scores, news, and updates. The platform attracted over 1,500 page views in  30 days.",
      technologies: [
        "React",
        "TailwindCSS",
        "Contentful",
        "Redux",
        "JavaScript",
        "SEO",
      ],
    },
    {
      id: 2,
      title: "Octave Labs",
      imageUrl:
        "https://res.cloudinary.com/dbdgevqyn/image/upload/v1726669975/Screenshot_481.png",
      projectUrl: "https://octave.ng",
      description:
        "I worked closely with product designers to bring their vision to life by developing responsive, visually appealing user interfaces using React.",
      technologies: [
        "JavaScript",
        "ReactJS",
        "Redux",
        "REST API",
        "Payment Integration",
      ],
    },
    {
      id: 3,
      title: "Election Monitoring App",
      imageUrl:
        "https://res.cloudinary.com/dbdgevqyn/image/upload/v1726652184/Screenshot_477.png",
      projectUrl: "https://election-monitoring-rho.vercel.app/",
      description:
        "Developed an application that provides real-time data, updates, and information on presidential, gubernatorial and senatorial elections in Nigeria.",
      technologies: ["React", "TailwindCSS", "Contentful", "Redux"],
    },
    {
      id: 4,
      title: "Nelson Iheagwam Ministries",
      imageUrl:
        "https://res.cloudinary.com/dbdgevqyn/image/upload/v1726662790/Screenshot_480.png",
      projectUrl: "https://niministries.org",
      description:
        "Built the ministry’s website with a team, converting Figma designs into functional React code and integrating a backend API for fetching content.",
      technologies: ["React", "TailwindCSS", "API Integration", "JavaScript"],
    },
    {
      id: 5,
      title: "Earthquake Data",
      imageUrl:
        "https://res.cloudinary.com/dbdgevqyn/image/upload/v1726662789/10.a450e120.png",
      projectUrl: "https://earthquake-data.vercel.app/",
      description:
        "I integrated the USGS API using the React Leaflet Library to display maps and implemented sorting and filtering functionalities in the application.",
      technologies: [
        "React",
        "TailwindCSS",
        "API Integration",
        "JavaScript",
        "React Leaflet",
      ],
    },
    {
      id: 6,
      title: "Travel Website Landing Page",
      imageUrl:
        "https://res.cloudinary.com/dbdgevqyn/image/upload/v1726662792/1.f2ca70fc.png",
      projectUrl: "https://travel-website-opal.vercel.app/",
      description:
        "A simple landing page for a hypothetical Travel Agency - this was a capstone project for my 'Learn to build real-world websites' course in 2021. ",
      technologies: ["HTML5", "CSS3", "Figma", "GitHub"],
    },
  ];

  return (
    <motion.div
      id="projects"
      className="bg-cream-light px-4 md:px-16 py-16"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.h2
        className="text-4xl md:text-6xl text-wow-green font-bold mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative block bg-[hsla(0,0%,100%,0.5)] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <motion.div className="w-full overflow-hidden">
                <motion.img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  variants={imageVariants}
                />
              </motion.div>

              <motion.div
                className="mt-4 px-4 py-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={projectTitleVariants}
              >
                <h3 className="text-2xl font-semibold text-wow-green">
                  {project.title}
                </h3>
                <p className="text-base md:text-sm text-wow-gray w-4/5">
                  {project.description}
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-2 mt-2 px-4 pt-2 pb-6 w-4/5"
                variants={techContainerVariants}
              >
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="px-4 py-1 text-xs font-acorn bg-green-100 border border-green-200 text-green-800 rounded-full transition duration-300 hover:bg-green-200"
                    variants={techItemVariants}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                className="absolute bottom-6 right-6 flex items-center justify-center bg-wow-green p-3 rounded-full shadow-lg transition-transform duration-300 transform group-hover:translate-x-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <ArrowRight size="24" className="text-cream-light -rotate-45" />
              </motion.div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
