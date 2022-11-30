import React from 'react';

import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs/AboutUs';
// import Team from '../components/AboutUs/Team';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      {/* <MainImage image={img} title="За нас" /> */}
      <AboutUs />
      {/* <Team /> */}
      <Footer />
    </div>
  );
};

export default About;
