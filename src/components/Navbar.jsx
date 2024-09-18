import React, { useState, useEffect } from "react";
import { HambergerMenu, CloseCircle } from "iconsax-react"; // Ensure you have iconsax-react installed
import Amoeba from "./../assets/amoeba.svg";
import Amoeba2 from "./../assets/amoeba2.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // UseEffect to disable/enable scrolling
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up when component unmounts or menu state changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className={isMenuOpen ? "overflow-hidden" : ""}>
      <nav className="bg-cream-light flex justify-center py-4 border-b-2 border-black relative overflow-hidden">
        {/* Surrounding pink accents */}
        <div className="absolute -bottom-12 left-5 h-16 w-16 transform -translate-x-1/2 -translate-y-1/2">
          <img src={Amoeba2} alt="amoeba image" className="w-full h-full" />
        </div>
        <div className="absolute -top-8 right-5 h-16 w-16 transform translate-x-1/2 translate-y-1/2">
          <img src={Amoeba} alt="amoeba image" className="w-full h-full" />
        </div>

        {/* Main nav bar */}
        <div className="flex items-center justify-between w-full max-w-7xl px-8 py-4 relative">
          {/* Logo */}
          <div className="flex items-center space-x-2 z-10">
            <span className="text-2xl font-bold">✦</span>
            <span className="font-semibold">Clinton Adabanya //</span>
          </div>

          {/* Hamburger Icon for Mobile */}
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
          <div className="hidden md:flex space-x-8 z-10">
            <a href="#about" className="font-medium">
              About
            </a>
            <a href="#experience" className="font-medium">
              Experience
            </a>
            <a href="#portfolio" className="font-medium">
              Projects
            </a>
            <a href="#articles" className="font-medium">
              Blog
            </a>
            <a href="#contact" className="font-medium">
              Contact
            </a>
          </div>

          {/* Mobile Nav Menu */}
          {isMenuOpen && (
            <>
              {/* Apply the blur effect to the main content */}
              <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md z-20" />
              <div className="fixed inset-0 top-16 bg-white h-fit py-6 z-20 rounded-lg mx-8 mt-4">
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
                    href="#portfolio"
                    className="font-medium"
                    onClick={toggleMenu}
                  >
                    Projects
                  </a>
                  <a
                    href="#articles"
                    className="font-medium"
                    onClick={toggleMenu}
                  >
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
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
