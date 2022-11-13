import React from "react";

import "./ImageBox.css";

const ImageBox = ({ img, size }) => {
  return (
    <div className="gallery-box">
      <img src={img} className={size} alt="" />
    </div>
  );
};

export default ImageBox;
