import React from "react";

import "./styles.css";

import Header from "../../assets/components/header";
import Player from "../../assets/components/player";

function Work() {
  return (
    <>
      <div id="page-work">
        <Header />
        <h1 className="main-text">Veja um pouco de nossos trabalhos</h1>
        <div id="work-recently">
          <Player url="https://vimeo.com/454188319" />
          <Player url="https://vimeo.com/454188298" />
          <Player url="https://vimeo.com/454188256" />
          <Player url="https://vimeo.com/454187252" />
          <Player url="https://vimeo.com/454359830" />
          <Player url="https://vimeo.com/454359816" />
          <Player url="https://vimeo.com/454480458" />
          <Player url="https://vimeo.com/454359846" />
          <Player url="https://vimeo.com/455237338" />
          <Player url="https://vimeo.com/455237349" />
          <Player url="https://vimeo.com/455237366" />
          <Player url="https://vimeo.com/455307461" />
        </div>
        <a
          href="https://www.instagram.com/impactos.car/"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Ver mais
        </a>
      </div>
    </>
  );
}

export default Work;
