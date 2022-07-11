import React from "react";

import Navbar from "../components/Navbar";
// import MainImage from "../components/MainImage";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

import img from "../assets/hero.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      {/* <MainImage image={img} title="За нас" /> */}
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
