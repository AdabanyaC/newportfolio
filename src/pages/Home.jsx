import React from "react";
import Navbar from "./../components/Navbar";
import HeroLanding from "../components/HeroLanding";
import LogoSlider from "../components/LogoSlider";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroLanding />
      <LogoSlider />
      <Experience />
      <Projects />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
