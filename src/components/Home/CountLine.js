import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useSpring, animated } from 'react-spring';

import './CountLine.css';

const CountLine = () => {
  function Number({ n, delay }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: delay,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="countline">
      <div className="countline-left">
        <h2 data-aos="fade-down">Стаи на разположение</h2>
        <h2 data-aos="fade-up">Ален Мак</h2>
      </div>
      <div className="countline-right">
        <div className="countline-wrapper">
          <div className="countline-box" data-aos="fade" data-aos-delay="300">
            <p>
              <Number n={60} delay={300} />
            </p>
            <span>Общо Стаи</span>
          </div>
          <div className="countline-box" data-aos="fade" data-aos-delay="900">
            <p>
              <Number n={60} delay={900} />
            </p>
            <span>Единични Стаи</span>
          </div>
        </div>

        <div className="countline-wrapper">
          <div className="countline-box" data-aos="fade" data-aos-delay="600">
            <p>
              <Number n={60} delay={600} />
            </p>
            <span>Двойни Стаи</span>
          </div>
          <div className="countline-box" data-aos="fade" data-aos-delay="1200">
            <p>
              <Number n={60} delay={1200} />
            </p>
            <span>Тройни Стаи</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountLine;
