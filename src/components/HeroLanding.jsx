import React from "react";
import IdeaBox from "./../assets/IdeaBox.svg"; // Replace with your actual image path
import Amoeba3 from "./../assets/amoeba3.svg"; // Replace with your actual image path
import Clinton from "./../assets/clinton.jpg";
import Arrow7 from "./../assets/Arrow7.svg";

const HeroLanding = () => {
  return (
    <section className="bg-cream-light h-screen py-16 px-4 flex flex-col items-center justify-between lg:flex-row">
      {/* Left section with heading and text */}
      <div className="flex flex-col lg:w-1/2 px-16">
        {/* Intro Text */}
        <p className="text-xl text-gray-600 mb-6">Hi, my name is</p>
        {/* Main Heading */}
        <h1 className="text-5xl font-bold text-black">Clinton Adabanya.</h1>
        {/* Subheading */}
        <h2 className="text-5xl font-bold text-black">
          Frontend Engineer (Web & Mobile)
        </h2>
        {/* Description */}
        <p className="text-lg text-gray-700 max-w-lg mt-4">
          I build pixel-perfect, engaging, and accessible web and mobile
          applications.
        </p>
        {/* Button */}
        <button className="w-40 mt-4 px-6 py-3 bg-blue-100 text-black border-2 border-black rounded-full shadow-md transition duration-300 hover:bg-blue-200">
          See Portfolio
        </button>
      </div>

      {/* Right section with image and icons */}
      <div className="relative lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
        <div className="absolute -top-40">
          <img src={Arrow7} alt="Arrow" />
        </div>

        {/* Idea icon */}
        <img
          src={IdeaBox}
          alt="Idea icon"
          className="absolute top-0 left-32 w-8 h-8"
        />

        {/* Image container with border and distinct shadow */}
        <div className="border-2 border-black w-1/2 relative rounded-lg">
          <div className="absolute inset-0 bg-black transform -rotate-6 -translate-x-3 translate-y-3 blur-md opacity-70"></div>
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
          className="absolute bottom-0 right-28 w-12 h-12"
        />
      </div>
    </section>
  );
};

export default HeroLanding;
