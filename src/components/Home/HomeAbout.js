import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../utils/scrollTop';
import Aos from 'aos';
import 'aos/dist/aos.css';

import homeAbout from '../../assets/home-about.jpg';

import './HomeAbout.css';

const HomeAbout = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-about">
      <div className="home-about-cont">
        <h2 data-aos="fade">Дом за стари хора Ален Мак</h2>
        <p data-aos="fade-left">
          Дом за стари хора Ален Мак се намира във Варна и е разположен в
          екологично чист район, далеч от шума на колите и в близост до морето.
          Сградата е пететажна , бивша почивна база, след основен ремонт, с
          прекрасна панорама към морето. Около нея е оформена паркова зона от
          1000 кв. с пейки, маси, овощни дървета, алпинеум, алея за разходки и
          отдих. Обособена е и зеленчукова градина. Дом за стари хора Ален Мак
          се намира във Варна и е разположен в екологично чист район, далеч от
          шума на колите и в близост до морето. Сградата е пететажна , бивша
          почивна база, след основен ремонт, с прекрасна панорама към морето.
          Около нея е оформена паркова зона от 1000 кв. с пейки, маси, овощни
          дървета, алпинеум, алея за разходки и отдих. Обособена е и зеленчукова
          градина.
        </p>
        <button className="btn" data-aos="slide-right">
          Научи повече
        </button>
      </div>
      <div className="home-about-right">
        <Link to="/accommodation" onClick={scrollTop} data-aos="zoom-in-up">
          <div>
            <img src={homeAbout} alt=""></img>
            <h4>Единична стая</h4>
          </div>
        </Link>

        <div>
          <Link
            to="/accommodation"
            onClick={scrollTop}
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            <img src={homeAbout} alt=""></img>
            <h4>Двойна стая</h4>
          </Link>
        </div>

        <Link
          to="/accommodation"
          onClick={scrollTop}
          data-aos="zoom-in-up"
          data-aos-delay="800"
        >
          <div>
            <img src={homeAbout} alt=""></img>
            <h4>Тройна стая</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeAbout;
