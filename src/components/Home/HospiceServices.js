import React, { useEffect } from 'react';
import {
  FaCamera,
  FaHeartbeat,
  FaUserMd,
  FaHandHoldingWater,
  FaLuggageCart,
  FaHandHoldingMedical,
  FaNotesMedical,
  FaPalette,
  FaMusic,
  FaHandsHelping,
} from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

import homeAbout from '../../assets/home-about.jpg';

import './HospiceServices.css';

const HospiceServices = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='hospice-services'>
      <div className='hospice-services-left'>
        <h2 data-aos='fade'>Ален Мак</h2>
        <p data-aos='fade'>Дом за настаняване и грижа</p>
        <img data-aos='fade-up' src={homeAbout} alt='' />
      </div>
      <div className='hospice-services-right'>
        <div className='hospice-services-box' data-aos='fade'>
          <p>
            <FaCamera />
          </p>
          <p>24/7 видеонаблюдение</p>
        </div>

        <div className='hospice-services-box' data-aos='fade'>
          <p>
            <FaUserMd />
          </p>
          <p>Прегледи от специалисти</p>
        </div>

        <div className='hospice-services-box' data-aos='fade'>
          <p>
            <FaHeartbeat />
          </p>
          <p>Медицинско наблюдение</p>
        </div>

        <div className='hospice-services-box' data-aos='fade'>
          <p>
            <FaHandHoldingWater />
          </p>
          <p>24 часово санитарно-битово обслужване и наблюдение</p>
        </div>

        <div className='hospice-services-box' data-aos='fade'>
          <p>
            <FaHandHoldingMedical />
          </p>
          <p>Рехабилитация</p>
        </div>

        <div className='hospice-services-box' data-aos='fade'>
          <p>
            <FaNotesMedical />
          </p>
          <p>Профилактични прегледи и изледвания</p>
        </div>

        <div className='hospice-services-box' data-aos='fade'>
          <p>
            <FaLuggageCart />
          </p>
          <p>Екскурзии и посещения на културни събития.</p>
        </div>

        <div className='hospice-services-box' data-aos='fade'>
          <p>
            <FaPalette />
          </p>
          <p>Арт-терапия</p>
        </div>
        <div className='hospice-services-box' data-aos='fade'>
          <p>
            <FaMusic />
          </p>
          <p>Музико-терапия</p>
        </div>

        <div className='hospice-services-box' data-aos='fade'>
          <p>
            <FaHandsHelping />
          </p>
          <p>Трудо-терапия</p>
        </div>
      </div>
    </div>
  );
};

export default HospiceServices;
