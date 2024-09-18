import React from "react";
import Instagram from "./../assets/icons/instagram.png";
import Github from "./../assets/icons/github.png";
import Linkedin from "./../assets/icons/linkedin.png";
import Twitter from "./../assets/icons/twitter.png";
import Wellfound from "./../assets/icons/wellfound.png";

const Footer = () => {
  return (
    <footer className="bg-cream-light py-24 px-6">
      <div className="text-center">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold">
            Do you have an idea? Let’s make magic together
          </h2>
          <p className="text-gray-600 mt-2">
            I am highly excited to meet with you and discuss the plans you have
            for your project.
          </p>
          <button className="w-40 mt-4 px-6 py-3 bg-blue-100 text-black border-2 border-black rounded-full shadow-md transition duration-300 hover:bg-blue-200 flex justify-center items-center m-auto gap-2">
            Contact Me
            <span role="img" aria-label="envelope">
              ✉️
            </span>{" "}
            {/* Email icon using emoji */}
          </button>
        </div>

        {/* Social Links Section */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/adabanyac" // Replace with actual Instagram profile link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors duration-200"
          >
            <img src={Github} alt="Github Logo" className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/clintonadabanya" // Replace with actual Instagram profile link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors duration-200"
          >
            <img src={Instagram} alt="Instagram Logo" className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/clinton-adabanya" // Replace with actual Instagram profile link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors duration-200"
          >
            <img src={Linkedin} alt="Linkedin Logo" className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/adabanya1" // Replace with actual Instagram profile link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors duration-200"
          >
            <img src={Twitter} alt="Twitter Logo" className="w-6 h-6" />
          </a>
          <a
            href="https://wellfound.com/u/clintonadabanya" // Replace with actual Instagram profile link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors duration-200 bg-black rounded-md"
          >
            <img src={Wellfound} alt="Wellfound Logo" className="w-6 h-6" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="text-gray-600">
          <nav className="flex justify-center space-x-6">
            <a href="#about" className="hover:text-gray-800 transition-colors">
              About
            </a>
            <a href="#work" className="hover:text-gray-800 transition-colors">
              Work
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
        </div>

        {/* Copyright Section */}
        <div className="text-gray-400 mt-8">
          © Clinton Adabanya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
