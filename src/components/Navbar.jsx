import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Switch, Route } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            АНДАЛИР <img src="/images/logo-home.jpg" height="100" width="100" />
          </Link>
          <Link to="/kek" className="navbar-logo">
            KEK!!!! 
          </Link>
          <div
            className="menu-icon"
            onClick={() => {
              setClick((prev) => {
                return !prev;
              });
            }}
          >
            {click ? (
                <CloseIcon/>
                ) : (
                <MenuIcon/> 
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
