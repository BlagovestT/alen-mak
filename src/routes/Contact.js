import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/Contact";
import Map from "../components/Map";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactUs />
      <Map />
      <Footer />
    </div>
  );
};

export default Contact;
