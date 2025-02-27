import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay: index * 0.2 },
  }),
};

const ProjectsSummary = () => {
  const projects = [
    {
      id: 1,
      title: "Octave Labs",
      imageUrl:
        "https://res.cloudinary.com/dbdgevqyn/image/upload/v1740617924/Screenshot_510_wxanvt.png",
      projectUrl: "https://octavelabs.co",
      description:
        "I developed a pixel-perfect website for a digital agency, Octave Labs, using React and TailwindCSS. The website is fully responsive and accessible.",
      technologies: ["React", "TailwindCSS", "Figma", "JavaScript"],
    },
    {
      id: 2,
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
      id: 3,
      title: "Octave Finance",
      imageUrl:
        "https://res.cloudinary.com/dbdgevqyn/image/upload/v1726669975/Screenshot_481.png",
      projectUrl: "https://octave-app.vercel.app",
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
      id: 4,
      title: "Election Monitoring App",
      imageUrl:
        "https://res.cloudinary.com/dbdgevqyn/image/upload/v1726652184/Screenshot_477.png",
      projectUrl: "https://election-monitoring-rho.vercel.app/",
      description:
        "Developed an application that provides real-time data, updates, and information on presidential, gubernatorial and senatorial elections in Nigeria.",
      technologies: ["React", "TailwindCSS", "Contentful", "Redux"],
    },
    {
      id: 5,
      title: "Nelson Iheagwam Ministries",
      imageUrl:
        "https://res.cloudinary.com/dbdgevqyn/image/upload/v1726662790/Screenshot_480.png",
      projectUrl: "https://niministries.org",
      description:
        "Built the ministry’s website with a team, converting Figma designs into functional React code and integrating a backend API for fetching content.",
      technologies: ["React", "TailwindCSS", "API Integration", "JavaScript"],
    },
    {
      id: 6,
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
      id: 7,
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
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-4xl md:text-6xl font-bold text-wow-green mb-12">
        Recent Projects
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-[hsla(0,0%,100%,0.5)] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            custom={index}
            variants={cardVariants}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-44 rounded-lg object-contain"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-wow-green">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSummary;
