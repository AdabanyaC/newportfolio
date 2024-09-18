import React from "react";
import { ArrowRight } from "iconsax-react"; // Import the icon from iconsax-react

const Experience = () => {
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
      technologies: [
        "React Native",
        "JavaScript",
        "REST API",
        "Expo",
        "Strapi",
      ],
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

  const handleResumeClick = () => {
    window.open(
      "https://res.cloudinary.com/dbdgevqyn/image/upload/v1726652153/Clinton_Adabanya_-_Frontend_Engineer_N.pdf",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col md:flex-row bg-cream-light px-6 md:px-24 pt-12 md:pt-24 space-y-8 md:space-y-0">
      {/* Left section - About Me */}
      <div className="w-full md:w-1/2 p-4 md:p-8 md:sticky md:top-0 h-screen">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
        <p className="text-xl italic">
          My journey into tech began on September 21st, 2016, when I wrote my
          first "Hello World" as an undergraduate at Covenant University,
          studying Computer Science.
        </p>
        <p className="mt-4">
          Since then, I’ve built and deployed web applications across industries
          like FinTech, Sports, Manufacturing, and Agriculture, collaborating
          with teams to bring impactful digital solutions to life. Whether it’s
          crafting responsive user interfaces, integrating complex APIs, or
          ensuring smooth user experiences, I thrive on the challenge of turning
          ideas, prototypes or designs into functional, elegant applications.
        </p>
        <p className="mt-4">
          When I’m not on my computer writing code, you can find me enjoying a
          game of football, playing FIFA, listening to music, or reading books
          on theology.
        </p>
      </div>

      {/* Right section - Experience */}
      <div className="w-full md:w-1/2 p-4 md:p-8 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Work Experience</h2>

        {/* Loop through experiences array */}
        {experiences.map((experience, index) => (
          <a
            key={index}
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-6 md:px-6 md:py-8 hover:border-black hover:rounded-2xl hover:shadow-md hover:bg-white hover:bg-opacity-30 hover:border-opacity-50 transition-all duration-300"
          >
            <div className="space-y-4">
              <div>
                <p className="text-lg md:text-xl font-semibold">
                  {experience.title} -{" "}
                  <span className="underline">{experience.company}</span>
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  {experience.date}
                </p>
              </div>
              <ul className="list-disc ml-4 text-sm md:text-base">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
              {/* Technologies used */}
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 md:px-4 md:py-1 bg-blue-100 text-black border border-black rounded-full shadow-md transition duration-300 hover:bg-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}

        {/* Button to view full resume */}
        <button
          onClick={handleResumeClick}
          className="flex items-center text-black font-bold text-lg md:text-xl mt-8"
        >
          View Full Résumé
          <div className="ml-2 -rotate-45">
            <ArrowRight size="24" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Experience;
