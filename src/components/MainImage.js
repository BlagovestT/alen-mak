import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './MainImage.css';

const MainImage = ({ img, title }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="main-image">
      <div className="main-image-cont">
        <h2 data-aos="fade-down">{title}</h2>
      </div>
    </div>
  );
};

export default MainImage;
