import React from 'react';
import Room from './Room';

import './Accommodation.css';

const Accommodation = () => {
  return (
    <div className='accommodation'>
      <div className='accommodation-intro'>
        <h2>
          Резиденция „Ален Мак“ разполага с 60 единични стаи, 60 двойни стаи, 60
          тройни стаи.
        </h2>
      </div>

      <div className='room-wrapper' style={{ backgroundColor: '#ececec' }}>
        <Room
          title='Единична стая'
          location='Южно изложение, с балкон, изглед към море.'
          contains={[
            'Телевизор',
            'Собствен санитарен възел',
            'Телевизор',
            'Собствен санитарен възел',
          ]}
        />
        <Room
          title='Двойна стая'
          location='Южно изложение, с балкон, изглед към море.'
          contains={[
            'Телевизор',
            'Собствен санитарен възел',
            'Телевизор',
            'Собствен санитарен възел',
          ]}
          align='reverse'
        />
        <Room
          title='Тройна стая'
          location='Южно изложение, с балкон, изглед към море.'
          contains={[
            'Телевизор',
            'Собствен санитарен възел',
            'Телевизор',
            'Собствен санитарен възел',
          ]}
        />
      </div>
    </div>
  );
};

export default Accommodation;
