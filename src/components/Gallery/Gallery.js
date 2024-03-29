import React from 'react';

import ImageBox from './ImageBox';
import MainImage from '../MainImage';

import { imge } from '../../utils/imgs';

import './Gallery.css';

const GalleryPage = () => {
  return (
    <div className='gallery'>
      <MainImage title='Галерия' />

      <div class='image-grid'>
        <div class='image-row'>
          <ImageBox img={imge.IMG_4323} size='02' />
          <ImageBox img={imge.IMG_4327} size='03' />
          <ImageBox img={imge.IMG_4336} size='01' />
        </div>

        <div class='image-row'>
          <ImageBox img={imge.IMG_4341} size='01' />
          <ImageBox img={imge.IMG_4347} size='02' />
          <ImageBox img={imge.IMG_4356} size='03' />
        </div>

        <div class='image-row'>
          <ImageBox img={imge.IMG_4364} size='01' />
          <ImageBox img={imge.IMG_4369} size='02' />
          <ImageBox img={imge.IMG_4374} size='01' />
        </div>

        <div class='image-row'>
          <ImageBox img={imge.IMG_4397} size='02' />
          <ImageBox img={imge.IMG_4399} size='01' />
          <ImageBox img={imge.IMG_5735} size='02' />
        </div>

        <div class='image-row'>
          <ImageBox img={imge.IMG_5737} size='02' />
          <ImageBox img={imge.IMG_5740} size='03' />
          <ImageBox img={imge.photofive} size='01' />
        </div>

        <div class='image-row'>
          <ImageBox img={imge.homeAbout} size='02' />
          <ImageBox img={imge.photoone} size='02' />
          <ImageBox img={imge.phototwo} size='03' />
        </div>

        <div class='image-row'>
          <ImageBox img={imge.photothree} size='02' />
          <ImageBox img={imge.photofour} size='03' />
          <ImageBox img={imge.img} size='02' />
        </div>

        <div class='image-row'>
          <ImageBox img={imge.photosix} size='01' />
          <ImageBox img={imge.photoeight} size='02' />
          <ImageBox img={imge.photonine} size='01' />
        </div>

        <div class='image-row'>
          <ImageBox img={imge.phototen} size='01' />
          <ImageBox img={imge.photoeleven} size='03' />
          <ImageBox img={imge.phototwelve} size='02' />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
