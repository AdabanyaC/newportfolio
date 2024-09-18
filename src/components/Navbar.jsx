import React from "react";
import Amoeba from "./../assets/amoeba.svg";
import Amoeba2 from "./../assets/amoeba2.svg";

const Navbar = () => {
  return (
    <nav className="bg-cream-light flex justify-center py-4 border-b-2 border-black relative overflow-hidden">
      {/* Surrounding pink accents */}
      <div className="absolute -bottom-12 left-5 h-16 w-16 transform -translate-x-1/2 -translate-y-1/2">
        <img src={Amoeba2} alt="amoeba image" className="w-full h-full" />
      </div>
      <div className="absolute -top-8 right-5 h-16 w-16 transform translate-x-1/2 translate-y-1/2">
        <img src={Amoeba} alt="amoeba image" className="w-full h-full" />
      </div>

      {/* Main nav bar */}
      <div className="flex items-center space-x-8 rounded-full border-2 border-black px-8 py-4 relative">
        {/* Logo */}
        <div className="flex items-center space-x-2 z-10">
          <span className="text-2xl font-bold">✦</span>
          <span className="font-semibold">Clinton Adabanya //</span>
        </div>

        {/* Links */}
        <div className="flex space-x-8 z-10">
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
      </div>
    </nav>
  );
};

export default Navbar;
