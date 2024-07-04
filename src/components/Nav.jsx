import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand">Ta dificil aprobar</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">Modo Clásico</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/fisio" className="nav-link">Fisiologia</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/micro" className="nav-link">Microbiología</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/farmaco" className="nav-link">Farmacología</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">Conoce más</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
