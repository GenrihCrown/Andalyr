import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";
import { InstagramOutlined, TwitterOutlined } from "@ant-design/icons";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-text">
          Узнавай первым о новостях из мира Андалира
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Подписаться</Button>
          </form>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-media-logo">
            <Link to="/" className="social-media-logo-link">
              АНДАЛИР
            </Link>
          </div>
          <small className="website-rights">АНДАЛИР © 2021</small>
          <div className="social-icons">
            <Link
              to="/"
              className="social-icons-link-instagram"
              targer="_blank"
              aria-label="Instagram"
            >
              <InstagramOutlined />
            </Link>
            <Link
              to="/"
              className="social-icons-link-twitter"
              targer="_blank"
              aria-label="Instagram"
            >
              <TwitterOutlined />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
