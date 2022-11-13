import React from 'react';

import ImageBox from './ImageBox';
import MainImage from '../MainImage';

import './Gallery.css';

import homeAbout from '../../assets/home-about.jpg';
import photoone from '../../assets/photo-one.jpg';
import phototwo from '../../assets/photo-two.jpg';
import photothree from '../../assets/photo-three.jpg';
import photofour from '../../assets/photo-four.jpg';
import photofive from '../../assets/photo-five.jpg';
import photosix from '../../assets/photo-six.jpg';
import photoeight from '../../assets/photo-eight.jpg';
import photonine from '../../assets/photo-nine.jpg';
import phototen from '../../assets/photo-ten.jpg';
import photoeleven from '../../assets/photo-eleven.jpg';
import phototwelve from '../../assets/photo-twelve.jpg';

const GalleryPage = () => {
  return (
    <div className='gallery'>
      <MainImage title='Галерия' />

      <div className='gallery-cont'>
        <ImageBox img={homeAbout} size='small' />
        <ImageBox img={photoone} size='small' />
        <ImageBox img={phototwo} size='small' />

        <ImageBox img={photothree} size='small' />
        <ImageBox img={photofour} size='small' />
        <ImageBox img={photofive} size='small' />

        <ImageBox img={photosix} size='small' />
        <ImageBox img={phototwelve} size='small' />
        <ImageBox img={photoeight} size='small' />

        <ImageBox img={photonine} size='small' />
        <ImageBox img={phototen} size='small' />
        <ImageBox img={photoeleven} size='small' />
      </div>
    </div>
  );
};

export default GalleryPage;
