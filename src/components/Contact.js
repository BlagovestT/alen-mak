import React from "react";
import MainImage from "./MainImage";

import {
  FaPhone,
  FaMailBulk,
  FaMapPin,
  FaSearchLocation,
} from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <MainImage title="Контакти" />
      <div className="contact-us">
        <h2>Свържете се с нас</h2>
        <div className="icons">
          <FaSearchLocation size={25} />
          <p>ул. Катя Папазова, местност Ален мак 3 А, 9007 Chayka, Varna</p>
        </div>
        <div className="icons">
          <FaPhone size={25} /> <p>0893766882</p>
        </div>
        <div className="icons">
          <FaMailBulk size={25} /> <p>test@test.test</p>
        </div>
      </div>

      <div className="contact-form">
        <form
          target="_blank"
          action="https://formsubmit.co/bgmf1234@gmail.com"
          method="POST"
        >
          <h2 className="contact-form-h">Свържете се директно с нас</h2>
          <label for="First Name">Име</label>
          <input
            type="text"
            name="First Name"
            id=""
            placeholder="Първо име"
            required
          />

          <label for="Family Name">Фамилия</label>
          <input
            type="text"
            name="Family Name"
            id=""
            placeholder="Фамилия"
            required
          />

          <label for="Email">Имeйл</label>
          <input type="email" name="Email" id="" placeholder="Имейл" required />

          <label for="Phone">Телефон</label>
          <input
            type="phone"
            name="Phone"
            id=""
            placeholder="Телефон"
            required
          />

          <label for="Massage">Съобщение</label>
          <textarea
            name="Massage"
            id=""
            cols="30"
            rows="10"
            placeholder="Вашето съобщение"
            required
          ></textarea>

          <button className="btn" type="submit">
            Изпрати
          </button>
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
