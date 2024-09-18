import React from "react";
import HeroLanding from "../components/HeroLanding";
import LogoSlider from "../components/LogoSlider";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div>
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
