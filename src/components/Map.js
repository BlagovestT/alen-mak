import React from "react";

import "./Map.css";

const Map = () => {
  return (
    <div>
      <iframe
        src="https://maps.google.com/maps?q=%D1%83%D0%BB.%20%D0%9A%D0%B0%D1%82%D1%8F%20%D0%9F%D0%B0%D0%BF%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0,%20%D0%BC%D0%B5%D1%81%D1%82%D0%BD%D0%BE%D1%81%D1%82%20%D0%90%D0%BB%D0%B5%D0%BD%20%D0%BC%D0%B0%D0%BA%203%D0%90,%209007%20Chayka,%20Varna&t=k&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default Map;
