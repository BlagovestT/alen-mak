import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import homeAbout from '../../assets/home-about.jpg';

import './Room.css';

const Room = ({
  title = '',
  location = '',
  contains = [],
  images = [],
  align = '',
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Check if reversed
  if (align === 'reverse') {
    return (
      <div className="room room-bg" data-aos="fade">
        {/* Room Content */}
        <div className="room-cont">
          {/* Title */}
          <h4>{title}</h4>
          {/* Location */}
          <p>{location}</p>

          {/* Room Includes */}
          <ul>
            {contains.map((item) => (
              <li>
                <FaCheckCircle /> {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Room Image */}
        <div className="room-img" data-aos="fade-left">
          <Swiper
            className="room-swiper"
            modules={[Navigation, EffectFade, Pagination]}
            navigation
            pagination={{ clickable: true }}
            effect
            speed={800}
            slidesPerView={1}
            loop
          >
            {images.map((image) => (
              <SwiperSlide className="room-slide">
                <img src={image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  } else {
    return (
      <div className="room">
        {/* Room Image */}
        <div className="room-img" data-aos="fade-right">
          <Swiper
            className="room-swiper"
            modules={[Navigation, EffectFade, Pagination]}
            navigation
            pagination={{ clickable: true }}
            effect
            speed={800}
            slidesPerView={1}
            loop
          >
            {images.map((image) => (
              <SwiperSlide className="room-slide">
                <img src={image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Room Content */}
        <div className="room-cont" data-aos="fade">
          {/* Title */}
          <h4>{title}</h4>
          {/* Location */}
          <p>{location}</p>

          {/* Room Includes */}
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
