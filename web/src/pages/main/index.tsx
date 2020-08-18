import React from "react";

import faceIcon from "../../assets/images/vetores/facebook.svg";
import instaIcon from "../../assets/images/vetores/instagram.svg";
import seguradoras from "../../assets/images/bandeiras.png";
import car from "../../assets/images/car_main1.png";

import { Link } from "react-router-dom";

import "./styles.css";

function Main() {
  document.title = "Impactos Car";

  return (
    <div id="main-page">
      <div id="main-content" className="container">
        <div id="main-text">
          <h1>IMPACTOS CAR</h1>
          <h2>
            Cuidando do seu carro como <br /> se fosse o nosso!
          </h2>
        </div>

        <img src={car} alt="carro de frente" className="car-main" />

        <div className="buttons-container">
          <Link to="/" id="know">
            Conhecer
          </Link>
          <Link to="/" id="work">
            Trabalhos
          </Link>
          <Link to="/" id="contact">
            Contato
          </Link>
        </div>

        <div className="address">
          <h2 id="title-address">Impactos Car</h2>
          <p id="content-address">
            <p id="important-address">Funilaria e Pintura </p>
            Rua Angelo Ribeiro, 352, Centro <br />
            Boituva - SP (18550-107)
          </p>
        </div>
        <div className="network">
          <p id="text">Siga-nos nas Redes Sociais</p>
          <div id="icons">
            <a
              href="https://www.facebook.com/David.Ribeiro66/?ref=br_rs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={faceIcon} alt="icone facebook" />
            </a>
            <a
              href="https://www.instagram.com/impactos.car/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaIcon} alt="icone instagram" />
            </a>
          </div>
        </div>
        <img src={seguradoras} alt="seguradoras" id="seguradoras" />
      </div>
    </div>
  );
}

export default Main;
