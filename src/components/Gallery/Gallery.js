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

      <div class='image-grid'>
        <div class='image-row'>
          <ImageBox img={homeAbout} size='02' />
          <ImageBox img={photoone} size='02' />
          <ImageBox img={phototwo} size='03' />
        </div>

        <div class='image-row'>
          <ImageBox img={photothree} size='02' />
          <ImageBox img={photofour} size='03' />
          <ImageBox img={photofive} size='02' />
        </div>

        <div class='image-row'>
          <ImageBox img={photosix} size='01' />
          <ImageBox img={photoeight} size='02' />
          <ImageBox img={photonine} size='01' />
        </div>

        <div class='image-row'>
          <ImageBox img={phototen} size='01' />
          <ImageBox img={photoeleven} size='01' />
          <ImageBox img={phototwelve} size='01' />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
