import React from "react";
import { motion } from "framer-motion";
import Instagram from "./../assets/icons/instagram.png";
import Github from "./../assets/icons/github.png";
import Linkedin from "./../assets/icons/linkedin.png";
import Twitter from "./../assets/icons/twitter.png";
import Wellfound from "./../assets/icons/wellfound.png";
import { MessageText1 } from "iconsax-react";

// Define animation variants for smooth transitions
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      className="bg-cream-light py-24 px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="text-center">
        {/* Section Title */}
        <motion.div
          className="mb-6"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl text-wow-green max-w-xl m-auto font-semibold">
            Do you have an idea? Let’s make magic together
          </h2>
          <p className="text-gray-600 max-w-md m-auto mt-2">
            I am highly excited to meet with you and discuss the plans you have
            for your project.
          </p>
          <motion.button
            className="w-44 mt-4 py-3 bg-wow-green text-cream-light rounded-full shadow-md transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="mailto:clintonadabanya@gmail.com"
              className="flex justify-center items-center m-auto gap-2"
            >
              Contact Me
              <MessageText1 size={24} />
              {/* Email icon using emoji */}
            </a>
          </motion.button>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          className="flex justify-center gap-6 mb-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {[
            {
              src: Github,
              alt: "Github Logo",
              href: "https://github.com/adabanyac",
            },
            {
              src: Instagram,
              alt: "Instagram Logo",
              href: "https://instagram.com/clintonadabanya",
            },
            {
              src: Linkedin,
              alt: "Linkedin Logo",
              href: "https://linkedin.com/in/clinton-adabanya",
            },
            {
              src: Twitter,
              alt: "Twitter Logo",
              href: "https://x.com/adabanya1",
            },
            {
              src: Wellfound,
              alt: "Wellfound Logo",
              href: "https://wellfound.com/u/clintonadabanya",
            },
          ].map((icon, index) => (
            <motion.a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors duration-200 bg-[hsla(0,0%,100%,0.5)] p-2 shadow rounded-md"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={icon.src} alt={icon.alt} className="w-4 h-4" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Links */}
        <motion.div
          className="text-gray-600"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <nav className="flex justify-center space-x-6">
            <a href="#about" className="hover:text-gray-800 transition-colors">
              About
            </a>
            <a
              href="#experience"
              className="hover:text-gray-800 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-gray-800 transition-colors"
            >
              Projects
            </a>
            <a href="#blog" className="hover:text-gray-800 transition-colors">
              Blog
            </a>
          </nav>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="text-wow-gray mt-8"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          © Clinton Adabanya. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
