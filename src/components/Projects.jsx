import React from "react";
import { ArrowRight } from "iconsax-react"; // Import the icon from iconsax-react

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Football O' Clock",
      imageUrl:
        "https://res.cloudinary.com/dbdgevqyn/image/upload/v1726662609/Screenshot_479.png",
      projectUrl: "https://footballoclock.com",
      description:
        "I integrated a Contentful backend to manage live football scores, news, and updates. The platform attracted over 1,500 page views in just 30 days.",
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
      technologies: [
        "React",
        "TailwindCSS",
        "Contentful",
        "Redux",
        "JavaScript",
      ],
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
      technologies: ["HTML5", "CSS3", "Figma"],
    },
  ];

  return (
    <div className="bg-cream-light px-12 py-16">
      <h2 className="text-4xl font-bold mb-12">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-24">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative p-4 bg-white transition-shadow duration-300"
            style={{
              position: "relative",
              boxShadow:
                "0px 4px 10px rgba(0, 0, 0, 0.1), inset 0px 0px 15px 2px rgba(0, 0, 0, 0.2)", // Unique card shadow
              borderRadius: "8px", // Rounded corners on the card itself
            }}
          >
            {/* Horizontal line at the top */}
            <div
              className="absolute top-0 -left-5 w-full"
              style={{
                height: "4px",
                width: "44rem",
                backgroundColor: "black",
                borderRadius: "8px",
                boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.4)", // Shadow on horizontal line
              }}
            ></div>

            {/* Horizontal line at the bottom */}
            <div
              className="absolute bottom-0 -left-5 w-full"
              style={{
                height: "4px",
                width: "44rem",
                backgroundColor: "black",
                borderRadius: "8px",
                boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.4)", // Shadow on horizontal line
              }}
            ></div>

            {/* Vertical line on the left */}
            <div
              className="absolute -top-5 left-0 h-full"
              style={{
                width: "4px",
                height: "36rem",
                backgroundColor: "black",
                borderRadius: "8px",
                boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.4)", // Shadow on vertical line
              }}
            ></div>

            {/* Vertical line on the right */}
            <div
              className="absolute -top-5 right-0 h-full"
              style={{
                width: "4px",
                height: "36rem",
                backgroundColor: "black",
                borderRadius: "8px",
                boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.4)", // Shadow on vertical line
              }}
            ></div>

            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="w-full overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full rounded-lg object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mt-4 px-4 py-2">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600 w-4/5">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-2 px-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1 text-xs bg-blue-100 text-black border border-black rounded-full shadow-md transition duration-300 hover:bg-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-6 right-6 flex items-center justify-center bg-black p-3 rounded-full shadow-lg transition-transform duration-300 transform group-hover:translate-x-2">
                <ArrowRight size="24" className="text-white -rotate-45" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
