import React from "react";

import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import HomeAbout from "../components/HomeAbout";
import Services from "../components/Services";
import Map from "../components/Map";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroImage />
      <HomeAbout />
      <Services />
      <Map />
      <Footer />
    </>
  );
};

export default Home;
