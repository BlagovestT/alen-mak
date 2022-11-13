import React from 'react';

import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs/AboutUs';
import Footer from '../components/Footer';

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
