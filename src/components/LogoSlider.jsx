import React from "react";
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

const LogoSlider = () => {
  return (
    <div className="bg-black py-16 px-4 md:px-8 flex flex-col md:flex-row items-center">
      {/* Title Section */}
      <div className="text-white w-full md:w-1/3 px-4 mb-8 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold capitalize text-center md:text-left">
          Tools & Technologies I'm exceptional at
        </h2>
      </div>

      {/* Static Grid Layout */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-8 md:gap-16 w-full">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={tool.logo}
              alt={`${tool.name} Logo`}
              className="h-12 sm:h-16 md:h-24 object-contain"
            />
            <p className="text-gray-50 mt-2 text-xs sm:text-sm md:text-base">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
