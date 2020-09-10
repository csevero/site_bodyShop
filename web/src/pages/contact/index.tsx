import React from "react";

import faceIcon from "../../assets/images/vetores/facebook.svg";
import instaIcon from "../../assets/images/vetores/instagram.svg";
import whatsIcon from "../../assets/images/vetores/whatsapp.svg";
import phoneIcon from "../../assets/images/vetores/phone.svg";

import "./styles.css";
import Header from "../../assets/components/header";

function Contato() {
  return (
      <div id="contact-content">
        <Header />
        <h1 className="main-text">
          Entre em contato com a gente pelos meios abaixo
        </h1>
        <div id="contacts">
          <div className="icons">
            <a
              href="https://www.facebook.com/David.Ribeiro66/?ref=br_rs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={faceIcon} alt="" />
              <p>Impactos Car</p>
            </a>
            <a
              href="https://www.instagram.com/impactos.car/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaIcon} alt="" />
              <p>@impactos.car</p>
            </a>
            <a href="tel:15996493449">
              <img src={phoneIcon} alt="" />
              <p>(15)3263-5723</p>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5515996493449&text=Ol%C3%A1%20quero%20fazer%20um%20or%C3%A7amento">
              <img src={whatsIcon} alt="" />
              <p>(15)99649-3449</p>
            </a>
          </div>
        </div>
        <h2 className="sec-text">Nos localize pelo seu GPS clicando aqui</h2>
        <a
          href="https://www.google.com.br/maps/place/-23.286313,+-47.671686/@-23.2861832,-47.6722011,19z/data=!4m5!3m4!7e2!8m2!3d-23.2863125!4d-47.6716861?hl=pt-BR"
          target="_blank"
          rel="noopener noreferrer"
          className="button-map"
        >
          Ver no mapa
        </a>
      </div>
  );
}

export default Contato;
