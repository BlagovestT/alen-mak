import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <h4>Ален Мак</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            tempora veniam officia sint recusandae. Harum eum nisi quia, ea
            provident dolores optio dicta reprehenderit saepe, adipisci eos,
            voluptates eius at.
          </p>
          <div className="social">
            <Link to="/">
              <FaFacebook
                size={30}
                style={{ marginRight: "1rem", color: "#fff" }}
              />
            </Link>
          </div>
        </div>

        <div className="right">
          <div className="location">
            <FaSearchLocation size={30} style={{ marginRight: "2rem" }} />
            <div>
              <p>Оборище 36, 9000</p>
              <h4>Варна, България</h4>
            </div>
          </div>

          <div className="phone">
            <FaPhone size={30} style={{ marginRight: "2rem" }} />
            <p>(+359) 893 768 82</p>
          </div>

          <div className="mail">
            <FaMailBulk size={30} style={{ marginRight: "2rem" }} />
            <p>test@test.test</p>
          </div>
        </div>
      </div>

      <div className="footer-down">
        <p>Alen Mak © 2022</p>
      </div>
    </div>
  );
};

export default Footer;
