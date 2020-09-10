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
    <div id="main-content">
      <div className="main-text">
        <h1>IMPACTOS CAR</h1>
        <h2>
          Cuidando do seu veículo como <br /> se fosse o nosso!
        </h2>
      </div>

      <img src={car} alt="carro de frente" className="car-main" />

      <div id="buttons-container">
        <Link to="/sobre" className="know">
          Conhecer
        </Link>
        <Link to="/trabalhos" className="work">
          Trabalhos
        </Link>
        <Link to="/contato" className="contact">
          Contato
        </Link>
      </div>

      <div id="address">
        <h2>Impactos Car</h2>
        <p className="content-address">
          <p style={{ color: "var(--color-red-2)", fontWeight: 700 }}>
            Funilaria e Pintura
          </p>
          Rua Angelo Ribeiro, 352, Centro <br />
          Boituva - SP (18550-107)
        </p>
      </div>
      <div id="network" style={{ fontWeight: 700 }}>
        <p style={{ color: "var(--color-red-2)" }}>
          Siga-nos nas Redes Sociais
        </p>
        <div className="icons">
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
      <img src={seguradoras} alt="seguradoras" className="seguradoras" />
    </div>
  );
}

export default Main;
