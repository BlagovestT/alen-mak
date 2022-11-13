import React from 'react';
import { FaCamera } from 'react-icons/fa';

import homeAbout from '../../assets/home-about.jpg';

import './HospiceServices.css';

const HospiceServices = () => {
  return (
    <div className='hospice-services'>
      <div className='hospice-services-left'>
        <h2>Хоспис Ален Мак</h2>
        <p>Подзаглавие</p>
        <img src={homeAbout} alt='' />
      </div>
      <div className='hospice-services-right'>
        <div className='hospice-services-box'>
          <p>
            <FaCamera />
          </p>
          <p>24/7 видеонаблюдение</p>
        </div>

        <div className='hospice-services-box'>
          <p>
            <FaCamera />
          </p>
          <p>Система за повикване на персонала от пациента</p>
        </div>

        <div className='hospice-services-box'>
          <p>
            <FaCamera />
          </p>
          <p>
            24/7 медицинско обслужване и наблюдение, сестрински грижи и
            санитарна помощ
          </p>
        </div>

        <div className='hospice-services-box'>
          <p>
            <FaCamera />
          </p>
          <p>24/7 видеонаблюдение</p>
        </div>

        <div className='hospice-services-box'>
          <p>
            <FaCamera />
          </p>
          <p>Система за повикване на персонала от пациента</p>
        </div>

        <div className='hospice-services-box'>
          <p>
            <FaCamera />
          </p>
          <p>
            24/7 медицинско обслужване и наблюдение, сестрински грижи и
            санитарна помощ
          </p>
        </div>
        <div className='hospice-services-box'>
          <p>
            <FaCamera />
          </p>
          <p>24/7 видеонаблюдение</p>
        </div>

        <div className='hospice-services-box'>
          <p>
            <FaCamera />
          </p>
          <p>Система за повикване на персонала от пациента</p>
        </div>

        <div className='hospice-services-box'>
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
