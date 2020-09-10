import React from "react";
import { Link } from "react-router-dom";

import BackIcon from "../../images/vetores/left-icon.svg";
import Silhueta from "../../images/silhueta_car.jpg";

import './styles.css';

function Header() {
  return (
    <header className="header-top">
      <div className="top-bar-content">
        <Link to="/">
          <img src={BackIcon} alt="voltar" />
        </Link>
        <img src={Silhueta} alt="silhueta" id="silhueta" />
      </div>
    </header>
  );
}

export default Header;