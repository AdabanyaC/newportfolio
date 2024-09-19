import React from "react";
import { motion } from "framer-motion";
import IdeaBox from "./../assets/IdeaBox.svg";
import Amoeba3 from "./../assets/amoeba3.svg";
import Clinton from "./../assets/clinton.jpg";
import Arrow7 from "./../assets/Arrow7.svg";

const HeroLanding = () => {
  return (
    <section className="bg-cream-light h-screen py-8 px-4 flex flex-col items-center justify-between lg:flex-row lg:py-16">
      {/* Left section with heading and text */}
      <motion.div
        className="flex flex-col w-full lg:w-1/2 lg:px-16 px-4 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-black">
          Clinton Adabanya.
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-black mt-2 sm:mt-4">
          Frontend Engineer (Web & Mobile)
        </h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-lg mt-3 sm:mt-4 mx-auto lg:mx-0">
          I build pixel-perfect, engaging, and accessible web and mobile
          applications.
        </p>
        <motion.button
          className="w-36 sm:w-40 mt-4 px-6 py-3 bg-blue-100 text-black border-2 border-black rounded-full shadow-md transition duration-300 hover:bg-blue-200 mx-auto lg:mx-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          See Portfolio
        </motion.button>
      </motion.div>

      {/* Right section with image and icons */}
      <motion.div
        className="relative w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="absolute -top-24 sm:-top-40"
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={Arrow7} alt="Arrow" className="w-32 md:w-full" />
        </motion.div>

        {/* Idea icon */}
        <motion.img
          src={IdeaBox}
          alt="Idea icon"
          className="absolute top-4 left-5 sm:left-32 w-6 h-6 sm:w-8 sm:h-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        <motion.div className="border-2 border-black w-2/3 sm:w-1/2 relative rounded-lg">
          <div className="absolute inset-0 bg-black transform -rotate-6 -translate-x-2 sm:-translate-x-3 translate-y-2 sm:translate-y-3 blur-md opacity-70"></div>
          <motion.img
            src={Clinton}
            alt="Clinton portrait"
            className="relative z-10 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          />
        </motion.div>

        <motion.img
          src={Amoeba3}
          alt="Star icon"
          className="absolute bottom-4 sm:bottom-0 right-4 sm:right-28 w-8 h-8 sm:w-12 sm:h-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        />
      </motion.div>
    </section>
  );
};

export default HeroLanding;
