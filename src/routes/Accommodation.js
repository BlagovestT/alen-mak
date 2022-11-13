import React from 'react';

import Navbar from '../components/Navbar';
import MainImage from '../components/MainImage';
import AccommodationPage from '../components/Accommodation/Accommodation';
import Footer from '../components/Footer';

import homeAbout from '../assets/home-about.jpg';

const Accommodation = () => {
  return (
    <div>
      <Navbar />
      <MainImage title='Настаняване' img={homeAbout} />
      <AccommodationPage />
      <Footer />
    </div>
  );
};

export default Accommodation;
