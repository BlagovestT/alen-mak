import React, { useState } from 'react';

import './ImageBox.css';

const ImageBox = ({ img, size }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div
      class={'image image-' + size}
      style={{ backgroundImage: 'url(' + img + ')' }}
      onClick={() => setOpened(!opened)}
    >
      <div
        className='image-popup'
        style={opened ? { display: 'flex' } : { display: 'none' }}
      >
        <div className='image-popup-cont'>
          <p>X</p>
          <img src={img} alt='' />
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
