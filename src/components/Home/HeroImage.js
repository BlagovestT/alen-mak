import React from 'react';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../utils/scrollTop';

import './HeroImage.css';

const HeroImage = () => {
  return (
    <div className='hero'>
      <div className='hero-cont'>
        <h2>Ален Мак</h2>
        <p>Заповядайте в нашия хоспис</p>
        <Link to='/contact' onClick={scrollTop}>
          <button className='btn'>Свържете се с нас</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroImage;
