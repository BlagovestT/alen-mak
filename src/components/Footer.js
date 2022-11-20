import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
} from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <h4>Ален Мак</h4>
          <p>
            Дом за стари хора Ален Мак се намира във Варна и е разположен в тих
            район, далеч от шума на колите и в близост до морето. Сградата е
            реновирана, с прекрасна панорама към морето. Около нея е оформена
            паркова зона от 1000 кв.м. с обособени зони за разходки и отдих.
          </p>
          <div className='social'>
            <a
              href='https://www.facebook.com/groups/514611607200131/?ref=share'
              target='_blank'
            >
              <FaFacebook
                size={30}
                style={{ marginRight: '1rem', color: '#fff' }}
              />
            </a>
          </div>
        </div>

        <div className='right'>
          <div className='location'>
            <FaSearchLocation size={30} style={{ marginRight: '2rem' }} />
            <div>
              <p>Катя Папазова 3-А, 9000</p>
              <h4>Варна, България</h4>
            </div>
          </div>

          <div className='phone'>
            <FaPhone size={30} style={{ marginRight: '2rem' }} />
            <p>(+359) 879 01 7766</p>
          </div>

          <div className='mail'>
            <FaMailBulk size={30} style={{ marginRight: '2rem' }} />
            <p>alenmakmedical@abv.bg</p>
          </div>
        </div>
      </div>

      <div className='footer-down'>
        <p>Ален Мак © 2022</p>
      </div>
    </div>
  );
};

export default Footer;
