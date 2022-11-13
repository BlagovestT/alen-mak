import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import homeAbout from '../../assets/home-about.jpg';

import './Room.css';

const Room = ({ title = '', location = '', contains = [], align = '' }) => {
  if (align === 'reverse') {
    return (
      <div className='room room-bg'>
        <div className='room-cont'>
          <h4>{title}</h4>
          <p>{location}</p>

          <ul>
            {contains.map((item) => (
              <li>
                <FaCheckCircle /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='room-img'>
          <img src={homeAbout} alt='' />
        </div>
      </div>
    );
  } else {
    return (
      <div className='room'>
        <div className='room-img'>
          <img src={homeAbout} alt='' />
        </div>
        <div className='room-cont'>
          <h4>{title}</h4>
          <p>{location}</p>

          <ul>
            {contains.map((item) => (
              <li>
                <FaCheckCircle /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default Room;
