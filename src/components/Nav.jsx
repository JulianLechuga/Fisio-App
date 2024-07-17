import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ paddingLeft: '20px', paddingRight: '20px', zIndex: 1000, padding:'10px 20px' }}>
      <span className="navbar-brand">Ta dificil aprobar</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">Modo Clásico</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/drill" className="nav-link">Simulacro exámen</NavLink>
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
