import React from 'react';

import './AboutUs.css';

import hero from '../../assets/hero.jpg';

const AboutUs = () => {
  return (
    <div class='about-us'>
      <div className='about-us-hero'>
        <div class='content-contain'>
          <div class='title-box'>
            <span class='desc-title'>Хоспис за стари хора</span>
            <h2 class='main-title'>Ален Мак</h2>
            <p class='linkz'>Прочетете повече за нас</p>
          </div>
          <div class='imgBox'></div>
        </div>
      </div>

      <div className='about-us-info'>
        <div className='about-us-img'>
          <img src={hero} alt='' />
        </div>
        <div className='about-us-cont'>
          <h2>Заглавие</h2>
          <p>
            Дом за стари хора Ален Мак се намира във Варна и е разположен в
            екологично чист район, далеч от шума на колите и в близост до
            морето. Сградата е пететажна , бивша почивна база, след основен
            ремонт, с прекрасна панорама към морето. Около нея е оформена
            паркова зона от 1000 кв. с пейки, маси, овощни дървета, алпинеум,
            алея за разходки и отдих. Обособена е и зеленчукова градина.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
