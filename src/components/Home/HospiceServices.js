import React, { useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

import homeAbout from '../../assets/home-about.jpg';

import './HospiceServices.css';

const HospiceServices = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="hospice-services">
      <div className="hospice-services-left">
        <h2 data-aos="fade">Хоспис Ален Мак</h2>
        <p data-aos="fade">Подзаглавие</p>
        <img data-aos="fade-up" src={homeAbout} alt="" />
      </div>
      <div className="hospice-services-right">
        <div className="hospice-services-box" data-aos="fade">
          <p>
            <FaCamera />
          </p>
          <p>24/7 видеонаблюдение</p>
        </div>

        <div className="hospice-services-box" data-aos="fade">
          <p>
            <FaCamera />
          </p>
          <p>Система за повикване на персонала от пациента</p>
        </div>

        <div className="hospice-services-box" data-aos="fade">
          <p>
            <FaCamera />
          </p>
          <p>
            24/7 медицинско обслужване и наблюдение, сестрински грижи и
            санитарна помощ
          </p>
        </div>

        <div className="hospice-services-box" data-aos="fade">
          <p>
            <FaCamera />
          </p>
          <p>24/7 видеонаблюдение</p>
        </div>

        <div className="hospice-services-box" data-aos="fade">
          <p>
            <FaCamera />
          </p>
          <p>Система за повикване на персонала от пациента</p>
        </div>

        <div className="hospice-services-box" data-aos="fade">
          <p>
            <FaCamera />
          </p>
          <p>
            24/7 медицинско обслужване и наблюдение, сестрински грижи и
            санитарна помощ
          </p>
        </div>
        <div className="hospice-services-box" data-aos="fade">
          <p>
            <FaCamera />
          </p>
          <p>24/7 видеонаблюдение</p>
        </div>

        <div className="hospice-services-box" data-aos="fade">
          <p>
            <FaCamera />
          </p>
          <p>Система за повикване на персонала от пациента</p>
        </div>

        <div className="hospice-services-box" data-aos="fade">
          <p>
            <FaCamera />
          </p>
          <p>
            24/7 медицинско обслужване и наблюдение, сестрински грижи и
            санитарна помощ
          </p>
        </div>
      </div>
    </div>
  );
};

export default HospiceServices;
