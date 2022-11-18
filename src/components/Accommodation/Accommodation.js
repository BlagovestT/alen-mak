import React, { useEffect } from 'react';
import Room from './Room';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './Accommodation.css';

import homeAbout from '../../assets/home-about.jpg';

const Accommodation = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="accommodation">
      <div className="accommodation-intro">
        {/* Main Title */}
        <h2 data-aos="fade-left">
          Резиденция „Ален Мак“ разполага с 60 единични стаи, 60 двойни стаи, 60
          тройни стаи.
        </h2>
      </div>

      {/* Rooms List */}
      <div className="room-wrapper" style={{ backgroundColor: '#ececec' }}>
        {/* Single Room */}
        <Room
          title="Единична стая"
          location="Южно изложение, с балкон, изглед към море."
          contains={[
            'Телевизор',
            'Собствен санитарен възел',
            'Телевизор',
            'Собствен санитарен възел',
          ]}
          images={[homeAbout, homeAbout, homeAbout, homeAbout]}
        />

        {/* Double Room */}
        <Room
          title="Двойна стая"
          location="Южно изложение, с балкон, изглед към море."
          contains={[
            'Телевизор',
            'Собствен санитарен възел',
            'Телевизор',
            'Собствен санитарен възел',
          ]}
          images={[homeAbout, homeAbout, homeAbout, homeAbout]}
          align="reverse"
        />

        {/* Tripple Room */}
        <Room
          title="Тройна стая"
          location="Южно изложение, с балкон, изглед към море."
          contains={[
            'Телевизор',
            'Собствен санитарен възел',
            'Телевизор',
            'Собствен санитарен възел',
          ]}
          images={[homeAbout, homeAbout, homeAbout]}
        />
      </div>
    </div>
  );
};

export default Accommodation;
