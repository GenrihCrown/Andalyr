import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Data = [
  { title: "Пролог", path: "/chapters/prologue", cName: "menu-item-text" },
  { title: "Скитальцы", path: "/chapters/wanderers", cName: "menu-item-text" },
  { title: "Охота", path: "/chapters/hunting", cName: "menu-item-text" },
  {
    title: "Воспоминания",
    path: "/chapters/memories",
    cName: "menu-item-text",
  },
];

const routeMode = Boolean(true);

function Menu() {
  if (routeMode) {
    return (
      <div className="side-menu-container">
        <nav className="side-menu">
          <ul className="side-menu-items">
            {Data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  } else if (!routeMode) {
      //Здесь заглушка на режим, когда одностраничная отрисовка контента
  }
}

export default Menu;
