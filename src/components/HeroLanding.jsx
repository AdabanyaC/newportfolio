import React from "react";
import { motion } from "framer-motion";
import IdeaBox from "./../assets/IdeaBox.svg";
import Amoeba3 from "./../assets/amoeba3.svg";
import Clinton from "./../assets/clinton.jpg";
import Arrow7 from "./../assets/Arrow7.svg";
import { MessageProgramming } from "iconsax-react";

const HeroLanding = () => {
  return (
    <>
      {/* Mobile View */}
      <section className="md:hidden py-4 flex space-y-24 flex-col items-center justify-between">
        {/* Left section with heading and text */}
        <motion.div
          className="flex flex-col w-full text-center mt-24"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-6xl text-wow-green">
            Hi, I'm Clinton Adabanya.
            <br />A Frontend Engineer.
          </h1>

          <p className="text-base sm:text-lg text-gray-700 max-w-lg mt-3 sm:mt-2 mx-auto">
            I'm passionate about building pixel-perfect, engaging, and
            accessible web and mobile applications that solve complex problems.
          </p>

          <motion.button
            className="w-52 m-auto mt-4 py-4 bg-wow-green text-white rounded-full shadow-md transition duration-300 flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#experience"
              className="flex justify-center items-center m-auto gap-2"
            >
              See My Projects
              <MessageProgramming size={24} color="#FDF6E4" />
            </a>
          </motion.button>
        </motion.div>

        {/* Right section with image and icons */}
        <motion.div
          className="relative w-full flex justify-center items-center mt-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="absolute -top-20 sm:-top-28"
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={Arrow7} alt="Arrow" className="w-24 md:w-full" />
          </motion.div>

          {/* Idea icon */}
          <motion.img
            src={IdeaBox}
            alt="Idea icon"
            className="absolute top-4 left-4 sm:left-16 w-6 h-6 sm:w-8 sm:h-8"
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
            className="absolute bottom-4 right-4 w-8 h-8 sm:w-12 sm:h-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          />
        </motion.div>
      </section>

      {/* Desktop View */}
      <section className="hidden md:block h-screen py-8 px-4 flex-col items-center justify-center lg:flex-row lg:py-40">
        {/* Left section with heading and text */}
        <motion.div
          className="flex flex-col justify-center items-center w-full lg:px-16 px-4 text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-[8rem] text-wow-green font-bold tracking-normal leading-none">
            Hi, I'm Clinton.
            <br />A Frontend Engineer.
          </h1>

          <p className="text-base sm:text-xl text-gray-700 max-w-2xl mt-3 sm:mt-4 mx-auto lg:mx-0">
            I'm passionate about building pixel-perfect, engaging, and
            accessible web and mobile applications that solve complex problems.
          </p>

          <motion.button
            className="w-52 mt-8 py-4 bg-wow-green text-white rounded-full shadow-md transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#experience"
              className="flex justify-center items-center m-auto gap-2"
            >
              See My Projects
              <MessageProgramming size={24} color="#FDF6E4" />
            </a>
          </motion.button>
        </motion.div>
      </section>
    </>
  );
};

export default HeroLanding;
