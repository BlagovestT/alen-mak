import React from 'react';

import './AboutUs.css';
import CountLine from '../Home/CountLine';

import hero from '../../assets/hero.jpg';

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='about-us-hero'>
        <div className='content-contain'>
          <div className='title-box'>
            <span className='desc-title'>Хоспис за стари хора</span>
            <h2 className='main-title'>Ален Мак</h2>
            <p className='linkz'>Прочетете повече за нас</p>
          </div>
          <div className='imgBox'></div>
        </div>
      </div>

      <CountLine />

      <div className='about-section'>
        <div className='about-section-left'></div>
        <div className='about-section-right'>
          <h4>About us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure natus
            provident aperiam consequatur delectus corporis accusantium
            voluptatum omnis, ea dolore vel eaque est exercitationem pariatur
            maxime soluta dignissimos! Fugit, incidunt illo quasi dolorum odio
            culpa a, nam nisi earum esse necessitatibus obcaecati distinctio
            perferendis ea voluptatibus molestias accusamus reiciendis
            aspernatur eligendi similique ad nostrum? Natus aliquam, autem
            explicabo laborum perferendis omnis, officia non distinctio
            reprehenderit eius voluptatum iure nemo fuga? Laudantium ex nostrum
            tempora reiciendis autem repellendus necessitatibus animi, sapiente
            error placeat, excepturi odio, ducimus et ratione nihil aspernatur
            exercitationem. Veniam recusandae perspiciatis, minus reiciendis
            officiis enim doloremque debitis? Magni voluptates debitis incidunt
            animi accusamus. Modi ut odio rem perspiciatis in. Neque quisquam
            porro veniam enim ipsum? Repudiandae, laboriosam nemo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
