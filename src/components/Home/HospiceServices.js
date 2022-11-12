import React from 'react';

import homeAbout from '../../assets/home-about.jpg';

import './HospiceServices.css';

const HospiceServices = () => {
  return (
    <div className='hospice-services'>
      <div className='hospice-services-left'>
        <h2>Основни дейности в Ален Мак</h2>
        <img src={homeAbout} alt='' />
      </div>
      <div className='hospice-services-right'>
        <div className='hospice-services-box'>
          <p>ICON HERE</p>
          <p>Lorem ipsum dolor, sit amet consectetur</p>
        </div>

        <div className='hospice-services-box'>
          <p>ICON HERE</p>
          <p>Lorem ipsum dolor, sit amet consectetur</p>
        </div>

        <div className='hospice-services-box'>
          <p>ICON HERE</p>
          <p>Lorem ipsum dolor, sit amet consectetur</p>
        </div>

        <div className='hospice-services-box'>
          <p>ICON HERE</p>
          <p>Lorem ipsum dolor, sit amet consectetur</p>
        </div>

        <div className='hospice-services-box'>
          <p>ICON HERE</p>
          <p>Lorem ipsum dolor, sit amet consectetur</p>
        </div>

        <div className='hospice-services-box'>
          <p>ICON HERE</p>
          <p>Lorem ipsum dolor, sit amet consectetur</p>
        </div>

        <div className='hospice-services-box'>
          <p>ICON HERE</p>
          <p>Lorem ipsum dolor, sit amet consectetur</p>
        </div>
      </div>
    </div>
  );
};

export default HospiceServices;
