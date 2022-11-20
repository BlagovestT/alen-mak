import React, { useEffect } from 'react';

import './AboutUs.css';
import CountLine from '../Home/CountLine';
import Aos from 'aos';
import 'aos/dist/aos.css';

import hero from '../../assets/hero.jpg';

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='about-us'>
      <div className='about-us-hero'>
        <div className='content-contain'>
          <div className='title-box' data-aos='fade-up'>
            <span className='desc-title'>Дом за настаняване и грижа</span>
            <h2 className='main-title'>Ален Мак</h2>
            <p className='linkz'>Прочетете повече за нас</p>
          </div>
          <div className='imgBox'></div>
        </div>
      </div>

      <CountLine />

      <div className='about-section'>
        <div className='about-section-left' data-aos='fade-right'></div>
        <div className='about-section-right'>
          <h4 data-aos='fade-left'>За Нас</h4>
          <p data-aos='fade' data-aos-delay='300'>
            Дом за стари хора Ален Мак се намира във Варна и е разположен в тих
            район, далеч от шума на колите. Сградата е реновирана, с прекрасна
            панорама към морето. Около нея е оформена паркова зона от 1000 кв.м.
            с обособени зони за разходки и отдих. Ние сме екип от
            професионалисти, отдадени на каузата да осигурим сигурна и спокойна
            среда за нашите резиденти. При нас те ще имат възможност да
            преодолеят социалната изулация, да открият нови приятели и да
            развият нови интереси, ще получите нужната грижа, подкрепа и
            приятелство.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
