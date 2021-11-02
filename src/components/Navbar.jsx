import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MenuOutlined,
  CloseOutlined
} from '@ant-design/icons';
import './Navbar.css';
import { Dropdown, Menu, Button as AntdButton } from "antd";
import { Button } from "./Button";

const menu = (
  <Menu>
    <Menu.Item>
      <a target="" rel="noopener noreferrer" href="/chapters">
        Главы
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="noopener noreferrer" href="/articles">
        Статьи
      </a>
    </Menu.Item>
    <Menu.Item className="menu-item-map">
        Карта
    </Menu.Item>
    <Menu.Item className="menu-item-bestiary">
        Бестиарий
    </Menu.Item>
  </Menu>
);

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMebu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton)


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMebu}>
            АНДАЛИР
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <CloseOutlined className="closeIcon" /> : <MenuOutlined className="menuIcon" />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMebu}>
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Dropdown placement="bottomCenter" overlay={menu} trigger={['hover']}>
                <Link
                  to="/universe" 
                  className="nav-links"
                  onClick={closeMobileMebu}
                >
                  Вселенная
                </Link>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links"
                onClick={closeMobileMebu}
              >
                О нас
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className="nav-links-mobile"
                onClick={closeMobileMebu}
              >
                Войти
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Войти</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
