import React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import Html5 from "./../assets/tools/html-5.png";
import Css3 from "./../assets/tools/css-3.png";
import Js from "./../assets/tools/js.png";
import ReactLogo from "./../assets/tools/react.png";
import Redux from "./../assets/tools/redux.svg";
import Tailwindcss from "./../assets/tools/tailwindcss.svg";
import Typescript from "./../assets/tools/typescript.png";
import Bootstrap from "./../assets/tools/bootstrap.png";
import Contentful from "./../assets/tools/contentful.svg";
import Strapi from "./../assets/tools/strapi.png";

const tools = [
  { name: "HTML5", logo: Html5 },
  { name: "CSS3", logo: Css3 },
  { name: "JavaScript", logo: Js },
  { name: "React", logo: ReactLogo },
  { name: "React Native", logo: ReactLogo }, // Reuse React logo for React Native
  { name: "Redux", logo: Redux },
  { name: "Typescript", logo: Typescript },
  { name: "TailwindCSS", logo: Tailwindcss },
  { name: "Bootstrap", logo: Bootstrap },
  { name: "Contentful", logo: Contentful },
  { name: "Strapi", logo: Strapi },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between animations of each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LogoSlider = () => {
  return (
    <div className="bg-cream-light py-16 px-4 md:px-16 flex flex-col">
      {/* Title Section */}
      <div className="w-full md:w-1/2 px-4 mb-8 md:mb-16">
        <h2 className="text-4xl md:text-6xl font-bold capitalize text-wow-green">
          Tools & Technologies I'm exceptional at
        </h2>
      </div>

      {/* Animated Grid Layout */}
      <motion.div
        className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-8 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: true, amount: 0.3 }} // The section will animate when 30% is in view, once
      >
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-[hsla(0,0%,100%,0.5)] rounded-lg p-4"
            variants={itemVariants} // Apply animation to each logo
          >
            <img
              src={tool.logo}
              alt={`${tool.name} Logo`}
              className="h-12 sm:h-16 md:h-24 object-contain"
            />
            <p className="text-gray-700 mt-2 text-xs sm:text-sm md:text-base">
              {tool.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSlider;
