import React from 'react';

import Navbar from '../components/Navbar';
import HeroImage from '../components/Home/HeroImage';
import HomeAbout from '../components/Home/HomeAbout';
import CountLine from '../components/Home/CountLine';
// import Services from '../components/Home/Services';
import Map from '../components/Map';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroImage />
      <HomeAbout />
      <CountLine />
      {/* <Services /> */}
      <Map />
      <Footer />
    </>
  );
};

export default Home;
