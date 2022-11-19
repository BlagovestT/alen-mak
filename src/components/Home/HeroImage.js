import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../utils/scrollTop';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './HeroImage.css';

const HeroImage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='hero'>
      <div className='hero-cont'>
        <h2 data-aos='fade-up'>Ален Мак</h2>
        <p data-aos='fade-up'>Заповядайте в нашия хоспис</p>
        <Link to='/contact' onClick={scrollTop} data-aos='fade-up'>
          <button className='btn'>Свържете се с нас</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroImage;
