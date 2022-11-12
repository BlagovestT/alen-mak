import React from 'react';

import './CountLine.css';

const CountLine = () => {
  return (
    <div className='countline'>
      <div className='countline-left'>
        <h2>Стаи на разположение</h2>
        <h2>Ален Мак</h2>
      </div>
      <div className='countline-right'>
        <div className='countline-wrapper'>
          <div className='countline-box'>
            <p>60</p>
            <span>Стаи</span>
          </div>
          <div className='countline-box'>
            <p>60</p>
            <span>Стаи</span>
          </div>
        </div>
        <div className='countline-wrapper'>
          <div className='countline-box'>
            <p>60</p>
            <span>Стаи</span>
          </div>
          <div className='countline-box'>
            <p>60</p>
            <span>Стаи</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountLine;
