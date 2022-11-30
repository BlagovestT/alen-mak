import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../utils/scrollTop';
import Aos from 'aos';
import 'aos/dist/aos.css';
import video from '../../assets/video.mp4';

import './HeroImage.css';

const HeroImage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='hero'>
      <video
        src='https://drive.google.com/file/d/1N8dGMvqCZkUOsPR4DBfZEBPGaHx4TciI/preview'
        loop
        muted
        autoPlay
        preload='auto'
      ></video>
      <div className='hero-cont'>
        <h2 data-aos='fade-up'>Ален Мак</h2>
        <p data-aos='fade-up'>Дом за настаняване и грижа</p>
        <Link to='/contact' onClick={scrollTop} data-aos='fade-up'>
          <button className='btn'>Свържете се с нас</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroImage;
