import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <span class="navbar-brand">Ta dificil aprobar</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link to="/" class="nav-link"> Modo Clásico </Link>
          </li>
          <li class="nav-item">
            <Link to="/timer" class="nav-link"> Modo Temporizador </Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link">Conoce más</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
    {/* <div className={nav.nav}>
      <Link to = "/">
        <span className={nav.button}> Modo Clásico </span>
      </Link>
      <Link to = "/timer">
        <span className={nav.button}> Modo temporizador </span>
      </Link>
      <Link to = "/about">
        <span className={nav.button}> Conoce más </span>
      </Link>
    </div> */}
};
