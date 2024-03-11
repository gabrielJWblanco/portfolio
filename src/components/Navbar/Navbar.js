import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CodeOutlined,
  IdcardOutlined,
  MailOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import "./Navbar.css";

export default function Navbar() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const navigate = useNavigate();
  
  return (
    <>
      <nav class="nav">
        <input id="menu" type="checkbox" />
        <label for="menu">Menu</label>
        <ul class="menu">
          <li>
            <IdcardOutlined
              className="icon"
              onClick={() => {
                navigate("/about-me");
              }}
            />
            <a>
              <span>Sobre mim</span>

              <i class="fas fa-address-card" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <CodeOutlined
              className="icon"
              onClick={() => {
                navigate("/projects");
              }}
            />
            <a>
              <span>Projetos</span>
              <i class="fas fa-tasks" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <SolutionOutlined
              className="icon"
              onClick={() => {
                navigate("/experience");
              }}
            />
            <a>
              <span>Experiência</span>
              <i class="fas fa-users" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <MailOutlined
              className="icon"
              onClick={() => {
                navigate("/contact");
              }}
            />
            <a>
              <span>Contacto</span>
              <i class="fas fa-envelope-open-text" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
