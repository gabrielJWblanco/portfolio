import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Menu } from "antd";
import "./Navbar.css";

export default function Navbar() {
  const items = [
    {
      label: "Navigation One",
      key: "mail",
      icon: <MailOutlined />,
    },
    {
      label: "Navigation Two",
      key: "app",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Navigation Three - Submenu",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: "alipay",
    },
  ];
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      {/*  <ConfigProvider
        theme={{
          token: {
            colorBgElevated:"#000000",
            colorPrimaryBorder:"pink"
          },
        }}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className="navbar"
        />
      </ConfigProvider> */}
      <nav class="nav">
        <input id="menu" type="checkbox" />
        <label for="menu">Menu</label>
        <ul class="menu">
          <li>
            <a href="#0">
              <span>Sobre mim</span>
              <i class="fas fa-address-card" aria-hidden="true"></i>
            </a>
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
