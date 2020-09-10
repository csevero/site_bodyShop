import React from "react";

import central_image from "../../assets/images/central_image.png";
import bandeiras from "../../assets/images/bandeiras1.png";

import Header from "../../assets/components/header";
import Slider from "react-slick";

import gh1 from "../../assets/images/estrutura/greenhouse/estufa1.jpeg";
import gh2 from "../../assets/images/estrutura/greenhouse/estufa2.jpeg";
import gh3 from "../../assets/images/estrutura/greenhouse/estufa3.jpeg";
import loc1 from "../../assets/images/estrutura/location/loc1.jpeg";
import spa1 from "../../assets/images/estrutura/space/spa1.jpeg";
import spa2 from "../../assets/images/estrutura/space/spa2.jpeg";
import spa3 from "../../assets/images/estrutura/space/spa3.jpeg";
import office1 from "../../assets/images/estrutura/office/office1.jpeg";

import faceIcon from "../../assets/images/vetores/facebook.svg";
import instaIcon from "../../assets/images/vetores/instagram.svg";
import whatsIcon from "../../assets/images/vetores/whatsapp.svg";
import phoneIcon from "../../assets/images/vetores/phone.svg";

import "./styles.css";

function About() {
  const slideConfig = {
    autoplay: true,
    autoplaySpeed: 4000,
    accessibility: false,
  };

  return (
    <div id="page-about">
      <Header />
      <img src={central_image} alt="imagem central" className="image-center" />
      <div id="about-content">
        <div className="how-we-are">
          <h1>Quem somos</h1>
          <p>
            A mais x anos na área de Funilaria e Pintura a Impactos Car vem
            trazendo comodidade para seus clientes, com serviços de qualidade e
            com preços acessíveis. A Impactos Car tem competência para trabalhar
            com veículos importados e nacionais com total experiência e
            afinidade para que vocês, nossos clientes saiam totalmente
            satisfeitos com o serviço prestado.<br />
            <br />
          </p>
          <p style={{ color: "var(--color-red-2)" }}>
            Aqui na Impactos a sua satisfação é nosso maior compromisso! Att.
            Equipe Impactos
          </p>
        </div>
        <div className="what-we-make">
          <h1>O que fazemos</h1>
          <p> Aqui na impactos somos especializados em</p>
          <ul className="list-our-work">
            <li>Polimento e cristalização</li>
            <li>Vitrificação</li>
            <li>Pintura</li>
            <li>Funilaria</li>
            <li>Martelinho de ouro</li>
          </ul>
          <br />
          <p>Entre outros, venha nos conhecer!</p>
        </div>
        <div className="insurers">
          <h1>Seguradoras</h1>
          <p>
            Pode ficar tranquilo, seu carro estará seguro conosco! Somos
            credenciados nas seguintes Seguradoras
          </p>
          <img src={bandeiras} alt="seguradoras" />
        </div>
        <div className="structure">
          <h1>Estrutura</h1>
          <div id="structure-specified">
            <div className="greenhouse">
              <Slider {...slideConfig}>
                <div>
                  <img src={gh1} alt="" />
                </div>
                <div>
                  <img src={gh2} alt="" />
                </div>
                <div>
                  <img src={gh3} alt="" />
                </div>
              </Slider>
              <h1>Estufa</h1>
              <p>
                Estufa para pintura de veículos, com ótima iluminação para que a
                pintura saia sem imperfeições e no tom certo!
              </p>
            </div>
            <div className="location">
              <Slider {...slideConfig}>
                <div>
                  <img src={loc1} alt="" />
                </div>
              </Slider>
              <h1>Localização</h1>
              <p>
                Uma ótima localização, sendo fácil de localizar, a oficina se
                localiza no centro da cidade de Boituva. Na Rua Angelo Ribeiro,
                352, Centro.
              </p>
            </div>
            <div className="space">
              <Slider {...slideConfig}>
                <div>
                  <img src={spa1} alt="" />
                </div>
                <div>
                  <img src={spa2} alt="" />
                </div>
                <div>
                  <img src={spa3} alt="" />
                </div>
              </Slider>
              <h1>Espaço</h1>
              <p>
                Espaço grande e seguro para veículos para que haja comodidade
                para nossos funcionários trabalharem com mais tranquilidade.
              </p>
            </div>
            <div className="office">
              <Slider {...slideConfig}>
                <div>
                  <img src={office1} alt="" />
                </div>
              </Slider>
              <h1>Escritório</h1>
              <p>
                Temos um escritório aconchegante para te atender da melhor
                forma, venha fazer um orçamento e tomar um café com a gente.
              </p>
            </div>
          </div>
        </div>
        <div className="contacts">
          <h1>Entre em contato com a gente pelos meios de contato abaixo</h1>
          <div className="icons-contacts">
            <a
              href="https://www.facebook.com/David.Ribeiro66/?ref=br_rs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={faceIcon} alt="" />
            </a>
            <a
              href="https://www.instagram.com/impactos.car/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaIcon} alt="" />
            </a>
            <a href="tel:15996493449">
              <img src={phoneIcon} alt="" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5515996493449&text=Ol%C3%A1%20quero%20fazer%20um%20or%C3%A7amento">
              <img src={whatsIcon} alt="" />
            </a>
          </div>
          <h2>Ou nos localize pelo seu GPS</h2>
          <a
            href="https://www.google.com.br/maps/place/-23.286313,+-47.671686/@-23.2861832,-47.6722011,19z/data=!4m5!3m4!7e2!8m2!3d-23.2863125!4d-47.6716861?hl=pt-BR"
            target="_blank"
            rel="noopener noreferrer"
            className="button-map"
          >
            Ver no mapa
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
