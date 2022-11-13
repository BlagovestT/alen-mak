import React from 'react';

import Navbar from '../components/Navbar';
import MainImage from '../components/MainImage';
import Footer from '../components/Footer';
import ContactUs from '../components/Contact/Contact';
import Map from '../components/Map';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <MainImage title='Контакти' />
      <ContactUs />
      <Map />
      <Footer />
    </div>
  );
};

export default Contact;
