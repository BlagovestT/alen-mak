import React from "react";

import "./MainImage.css";

const MainImage = ({ img, title }) => {
  return (
    <div className="main-image">
      <div className="main-image-cont">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default MainImage;
