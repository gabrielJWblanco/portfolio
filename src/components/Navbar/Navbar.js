import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CodeOutlined,
  IdcardOutlined,
  MailOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import "./Navbar.css";

export default function Navbar() {
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
            <div>
              <span>About me</span>

              <i class="fas fa-address-card" aria-hidden="true"></i>
            </div>
          </li>
          <li>
            <CodeOutlined
              className="icon"
              onClick={() => {
                navigate("/projects");
              }}
            />
            <div>
              <span>Projects</span>
              <i class="fas fa-tasks" aria-hidden="true"></i>
            </div>
          </li>
          <li>
            <SolutionOutlined
              className="icon"
              onClick={() => {
                navigate("/experience");
              }}
            />
            <div>
              <span>Experience</span>
              <i class="fas fa-users" aria-hidden="true"></i>
            </div>
          </li>
          <li>
            <MailOutlined
              className="icon"
              onClick={() => {
                navigate("/contact");
              }}
            />
            <div>
              <span>Contact</span>
              <i class="fas fa-envelope-open-text" aria-hidden="true"></i>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
