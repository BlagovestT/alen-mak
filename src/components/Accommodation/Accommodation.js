import React, { useEffect } from 'react';
import Room from './Room';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './Accommodation.css';

import { imge } from '../../utils/imgs';

const Accommodation = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='accommodation'>
      <div className='accommodation-intro'>
        {/* Main Title */}
        <h2 data-aos='fade-left'>
          Резиденция „Ален Мак“ разполага с 6 единични стаи, 29 двойни стаи, 11
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
            'Собствен санитарен възел и медицинско наблюдение',
            'Рехабилитация три пъти седмично',
            'Социални услуги',
          ]}
          images={[imge.IMG_5737, imge.IMG_5735, imge.IMG_5740]}
        />

        {/* Double Room */}
        <Room
          title='Двойна стая'
          location='Южно изложение, с балкон, изглед към море.'
          contains={[
            'Телевизор',
            'Собствен санитарен възел и медицинско наблюдение',
            'Рехабилитация три пъти седмично',
            'Социални услуги',
          ]}
          images={[imge.photosix]}
          align='reverse'
        />

        {/* Tripple Room */}
        <Room
          title='Тройна стая'
          location='Южно изложение, с балкон, изглед към море.'
          contains={[
            'Телевизор',
            'Собствен санитарен възел и медицинско наблюдение',
            'Рехабилитация три пъти седмично',
            'Социални услуги',
          ]}
          images={[imge.photofive]}
        />
      </div>
    </div>
  );
};

export default Accommodation;
