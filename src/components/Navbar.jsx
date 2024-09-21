import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HambergerMenu, CloseCircle } from "iconsax-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-4`}
      >
        <div className={`flex md:justify-center pt-10 relative`}>
          <div
            className={`flex items-center justify-between w-full md:w-0 rounded-full px-4 ${
              isScrolled &&
              "bg-white bg-opacity-70 backdrop-blur-md shadow-lg py-4 md:hidden"
            }`}
          >
            <motion.div
              className="flex items-center space-x-2 z-10 md:hidden bg-wow-green text-cream-light rounded-full p-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* <span className="text-2xl font-bold">✦</span> */}
              <span className="font-semibold text-lg">
                <a href="#home">CA</a>
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
          </div>

          {/* Desktop Nav Links */}
          <motion.div
            className={`hidden md:flex space-x-8 z-10 rounded-full ${
              isScrolled &&
              "bg-white bg-opacity-70 backdrop-blur-md shadow-lg px-8 py-4"
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="#about" className="font-medium text-wow-gray">
              About
            </a>
            <a href="#experience" className="font-medium text-wow-gray">
              Experience
            </a>
            <a href="#projects" className="font-medium text-wow-gray">
              Projects
            </a>
            <a href="#blog" className="font-medium text-wow-gray">
              Blog
            </a>
            <a href="#contact" className="font-medium text-wow-gray">
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
                  <a
                    href="#about"
                    className="font-medium text-wow-gray"
                    onClick={toggleMenu}
                  >
                    About
                  </a>
                  <a
                    href="#experience"
                    className="font-medium text-wow-gray"
                    onClick={toggleMenu}
                  >
                    Experience
                  </a>
                  <a
                    href="#projects"
                    className="font-medium text-wow-gray"
                    onClick={toggleMenu}
                  >
                    Projects
                  </a>
                  <a
                    href="#blog"
                    className="font-medium text-wow-gray"
                    onClick={toggleMenu}
                  >
                    Blog
                  </a>
                  <a
                    href="#contact"
                    className="font-medium text-wow-gray"
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
