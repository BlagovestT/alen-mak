import React from "react";
import {
  FaHandHoldingMedical,
  FaHandHoldingHeart,
  FaHeartbeat,
} from "react-icons/fa";

import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <h2>Услуги</h2>
      <div className="services-wrapper">
        <div className="services-box">
          <div className="services-icon">
            <FaHandHoldingMedical size={80} style={{ color: "#fff" }} />
          </div>
          <h4>Заглавие</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            magni quibusdam dolores, reprehenderit aut provident incidunt earum
            ad ratione adipisci, accusantium laborum possimus harum, tenetur
            explicabo molestiae esse quos repellat!
          </p>
          <button className="btn">Виж повече</button>
        </div>

        <div className="services-box">
          <div className="services-icon">
            <FaHandHoldingHeart size={80} style={{ color: "#fff" }} />
          </div>
          <h4>Заглавие</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            sint suscipit eveniet qui expedita totam, doloribus magni, fugiat
            earum harum illo sapiente nesciunt aliquam accusantium veritatis
            officiis tempore labore saepe?
          </p>
          <button className="btn">Виж повече</button>
        </div>

        <div className="services-box">
          <div className="services-icon">
            <FaHeartbeat size={80} style={{ color: "#fff" }} />
          </div>
          <h4>Заглавие</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            sint suscipit eveniet qui expedita totam, doloribus magni, fugiat
            earum harum illo sapiente nesciunt aliquam accusantium veritatis
            officiis tempore labore saepe?
          </p>
          <button className="btn">Виж повече</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
