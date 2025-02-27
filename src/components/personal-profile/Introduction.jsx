import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  const fullText = ["Meet Clinton Adabanya!"];
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (index < fullText[0].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[0][index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setAnimationComplete(true), 500);
    }
  }, [index]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-gray-900">
      <motion.div
        className="max-w-5xl text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl text-wow-green font-bold md:text-6xl lg:text-[9rem] leading-tight">
          {displayedText}
          {!animationComplete && <span className="animate-blink">|</span>}
        </h1>

        <p className="mt-4 text-base lg:text-lg text-gray-700 max-w-2xl mx-auto">
          I’m a passionate Frontend Developer dedicated to crafting engaging,
          high-performance, and accessible web applications. With a keen eye for
          design and a love for clean, maintainable code, I bring ideas to life.
        </p>
      </motion.div>
    </section>
  );
};

export default Introduction;
