import React from "react";
import IdeaBox from "./../assets/IdeaBox.svg"; // Replace with your actual image path
import Amoeba3 from "./../assets/amoeba3.svg"; // Replace with your actual image path
import Clinton from "./../assets/clinton.jpg";
import Arrow7 from "./../assets/Arrow7.svg";

const HeroLanding = () => {
  return (
    <section className="bg-cream-light h-screen py-8 px-4 flex flex-col items-center justify-between lg:flex-row lg:py-16">
      {/* Left section with heading and text */}
      <div className="flex flex-col w-full lg:w-1/2 lg:px-16 px-4 text-center lg:text-left">
        {/* Intro Text */}
        <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">
          Hi, my name is
        </p>
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold text-black">
          Clinton Adabanya.
        </h1>
        {/* Subheading */}
        <h2 className="text-3xl sm:text-5xl font-bold text-black mt-2 sm:mt-4">
          Frontend Engineer (Web & Mobile)
        </h2>
        {/* Description */}
        <p className="text-base sm:text-lg text-gray-700 max-w-lg mt-3 sm:mt-4 mx-auto lg:mx-0">
          I build pixel-perfect, engaging, and accessible web and mobile
          applications.
        </p>
        {/* Button */}
        <button className="w-36 sm:w-40 mt-4 px-6 py-3 bg-blue-100 text-black border-2 border-black rounded-full shadow-md transition duration-300 hover:bg-blue-200 mx-auto lg:mx-0">
          See Portfolio
        </button>
      </div>

      {/* Right section with image and icons */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
        <div className="absolute -top-24 sm:-top-40">
          <img src={Arrow7} alt="Arrow" className="w-32 md:w-full" />
        </div>

        {/* Idea icon */}
        <img
          src={IdeaBox}
          alt="Idea icon"
          className="absolute top-4 left-5 sm:left-32 w-6 h-6 sm:w-8 sm:h-8"
        />

        {/* Image container with border and distinct shadow */}
        <div className="border-2 border-black w-2/3 sm:w-1/2 relative rounded-lg">
          <div className="absolute inset-0 bg-black transform -rotate-6 -translate-x-2 sm:-translate-x-3 translate-y-2 sm:translate-y-3 blur-md opacity-70"></div>
          <img
            src={Clinton}
            alt="Clinton portrait"
            className="relative z-10 rounded-lg"
          />
        </div>

        {/* Star icon at bottom right */}
        <img
          src={Amoeba3}
          alt="Star icon"
          className="absolute bottom-4 sm:bottom-0 right-4 sm:right-28 w-8 h-8 sm:w-12 sm:h-12"
        />
      </div>
    </section>
  );
};

export default HeroLanding;
