import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HambergerMenu, CloseCircle } from "iconsax-react"; // Ensure you have iconsax-react installed
import Amoeba from "./../assets/amoeba.svg";
import Amoeba2 from "./../assets/amoeba2.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div id="home" className={isMenuOpen ? "overflow-hidden" : ""}>
      <nav className="bg-cream-light flex justify-center py-4 border-b-2 border-black relative overflow-hidden">
        <div className="absolute -bottom-12 left-5 h-16 w-16 transform -translate-x-1/2 -translate-y-1/2">
          <motion.img
            src={Amoeba2}
            alt="amoeba image"
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="absolute -top-8 right-5 h-16 w-16 transform translate-x-1/2 translate-y-1/2">
          <motion.img
            src={Amoeba}
            alt="amoeba image"
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <div className="flex items-center justify-between w-full max-w-7xl px-8 py-4 relative">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-2xl font-bold">✦</span>
            <span className="font-semibold text-lg">
              <a href="#home">Clinton Adabanya</a>
            </span>
          </motion.div>

          {/* Hamburger Icon */}
          <div className="md:hidden z-50" onClick={toggleMenu}>
            {isMenuOpen ? (
              <CloseCircle
                size="32"
                variant="Bold"
                className="text-white cursor-pointer"
              />
            ) : (
              <HambergerMenu size="32" className="cursor-pointer" />
            )}
          </div>

          {/* Desktop Nav Links */}
          <motion.div
            className="hidden md:flex space-x-8 z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="#about" className="font-medium">
              About
            </a>
            <a href="#experience" className="font-medium">
              Experience
            </a>
            <a href="#projects" className="font-medium">
              Projects
            </a>
            <a href="#blog" className="font-medium">
              Blog
            </a>
            <a href="#contact" className="font-medium">
              Contact
            </a>
          </motion.div>

          {/* Mobile Nav Menu */}
          {isMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="fixed inset-0 top-16 bg-white h-fit py-6 z-20 rounded-lg mx-8 mt-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-col items-center space-y-6">
                  <a href="#about" className="font-medium" onClick={toggleMenu}>
                    About
                  </a>
                  <a
                    href="#experience"
                    className="font-medium"
                    onClick={toggleMenu}
                  >
                    Experience
                  </a>
                  <a
                    href="#projects"
                    className="font-medium"
                    onClick={toggleMenu}
                  >
                    Projects
                  </a>
                  <a href="#blog" className="font-medium" onClick={toggleMenu}>
                    Blog
                  </a>
                  <a
                    href="#contact"
                    className="font-medium"
                    onClick={toggleMenu}
                  >
                    Contact
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
