import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { scrollTop } from '../utils/scrollTop';

import './Navbar.css';

import logo from '../assets/logo.png';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      if (window.location.pathname.split('/')[1] !== 'about') {
        setColor(true);
      }
    } else {
      if (window.location.pathname.split('/')[1] !== 'about') {
        setColor(false);
      }
    }
  };

  window.addEventListener('scroll', changeColor);

  useEffect(() => {
    if (window.location.pathname.split('/')[1] === 'about') {
      setColor(true);
    }
  }, []);

  return (
    <div className={color ? 'header-bg' : 'header'}>
      <Link to="/">
        {/* <h1>Ален Мак</h1> */}
        <img src={logo} alt="Alen Mak Logo" />
      </Link>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/" onClick={scrollTop}>
            Начало
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={scrollTop}>
            За Нас
          </Link>
        </li>
        <li>
          <Link to="/accommodation" onClick={scrollTop}>
            Настаняване
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={scrollTop}>
            Галерия
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={scrollTop}>
            Контакти
          </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: '#000' }} />
        ) : (
          <FaBars size={30} style={{ color: '#000' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
