import React from "react";
import logoKeepe from "./assets/keepelogo.png";
import "./assets/styles.css";

const NavbarComponent = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5 navKeepe"
      id="navbar-example"
      style={{ backgroundColor: "#ffaf45" }}
    >
      <div class="container">
        <a href="/" class="navbar-brand">
          <img class="icononav" src={logoKeepe} alt="" />
        </a>
        <span class="iconotext">Keepe</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li class="nav-item">
              <a href="#inicio" class="nav-link" aria-current="page">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a href="#servicios" class="nav-link">
                {" "}
                Servicios{" "}
              </a>
            </li>
            <li class="nav-item">
              <a href="#comentarios" class="nav-link">
                {" "}
                Comentarios{" "}
              </a>
            </li>
            <li class="nav-item">
              <a href="#suscribete" class="nav-link">
                {" "}
                Suscribete{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
