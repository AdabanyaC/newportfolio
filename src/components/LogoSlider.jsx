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

const LogoSlider = () => {
  return (
    <div className="bg-black py-16 px-8 flex items-center space-x-16">
      {/* Title Section */}
      <div className="text-white w-1/4 px-8">
        <h2 className="text-4xl font-bold mb-4 capitalize">
          Tools & Technologies I'm exceptional at
        </h2>
      </div>

      {/* Slider Section */}
      <div className="overflow-hidden w-3/4">
        <div className="flex items-center gap-24 animate-slide">
          {/* HTML5 */}
          <div className="flex flex-col items-center">
            <img src={Html5} alt="HTML5 Logo" className="" />
            <p className="text-gray-50 mt-2">HTML5</p>
          </div>

          {/* CSS3 */}
          <div className="flex flex-col items-center">
            <img src={Css3} alt="CSS3 Logo" className="" />
            <p className="text-gray-50 mt-2">CSS3</p>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <img src={Js} alt="JavaScript Logo" className="" />
            <p className="text-gray-50 mt-2">JavaScript</p>
          </div>

          {/* React */}
          <div className="flex flex-col items-center">
            <img src={ReactLogo} alt="React Logo" className="" />
            <p className="text-gray-50 mt-2">React</p>
          </div>

          {/* React Native */}
          <div className="flex flex-col items-center">
            <img src={ReactLogo} alt="React Native Logo" className="" />
            <p className="text-gray-50 mt-2">React Native</p>
          </div>

          {/* Redux */}
          <div className="flex flex-col items-center">
            <img src={Redux} alt="Redux Logo" className="" />
            <p className="text-gray-50 mt-2">Redux</p>
          </div>

          {/* Typescript */}
          <div className="flex flex-col items-center">
            <img src={Typescript} alt="Typescript Logo" className="" />
            <p className="text-gray-50 mt-2">Typescript</p>
          </div>

          {/* TailwindCSS */}
          <div className="flex flex-col items-center">
            <img src={Tailwindcss} alt="Tailwind CSS Logo" className="" />
            <p className="text-gray-50 mt-2">TailwindCSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Bootstrap} alt="Tailwind CSS Logo" className="" />
            <p className="text-gray-50 mt-2">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Contentful} alt="Tailwind CSS Logo" className="" />
            <p className="text-gray-50 mt-2">Contentful</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Strapi} alt="Tailwind CSS Logo" className="" />
            {/* <p className="text-gray-50 mt-2">Strapi</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
