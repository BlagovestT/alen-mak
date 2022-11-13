import React from 'react';
import Room from './Room';

import './Accommodation.css';

const Accommodation = () => {
  return (
    <div className='accommodation'>
      <div className='accommodation-intro'>
        {/* Main Title */}
        <h2>
          Резиденция „Ален Мак“ разполага с 60 единични стаи, 60 двойни стаи, 60
          тройни стаи.
        </h2>
      </div>

      {/* Rooms List */}
      <div className='room-wrapper' style={{ backgroundColor: '#ececec' }}>
        {/* Single Room */}
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

        {/* Double Room */}
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

        {/* Tripple Room */}
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
