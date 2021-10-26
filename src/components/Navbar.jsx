import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FontDownloadIcon from "@mui/icons-material/FontDownload";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMebu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            АНДАЛИР <FontDownloadIcon></FontDownloadIcon>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <CloseIcon /> : <MenuIcon />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMebu}>
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/universe"
                className="nav-links"
                onClick={closeMobileMebu}
              >
                Вселенная
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aboutus"
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
        </div>
      </nav>
    </>
  );
}

export default Navbar;
