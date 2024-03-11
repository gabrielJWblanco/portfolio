import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <nav class="nav">
        <input id="menu" type="checkbox" />
        <label for="menu">Menu</label>
        <ul class="menu">
          <li>
            <Link>
              <span>Sobre mim</span>
              <i class="fas fa-address-card" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <a href="#0">
              <span>Projetos</span>
              <i class="fas fa-tasks" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <span>Experiençia</span>
              <i class="fas fa-users" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <span>Contacto</span>
              <i class="fas fa-envelope-open-text" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
