import React from "react";
import { Button } from "./Button"
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-text">
            Узнавай первым о новостях из мира Андалира
        </p>
        <div className="input-areas">
            <form>
                <input type="email" name="email" placeholder="Email" className="footer-input" />
                <Button buttonStyle="btn--outline">Подписаться</Button>
            </form>
        </div>
      </section>
      <div className="footer-links">
          <div className="footer-link-wrapper">
              <div className="footer-link-items">
                  <h2></h2>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Footer;