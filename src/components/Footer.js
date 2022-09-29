import React from 'react';

import data from "../assets/footer/data.json";
import linkedin from "../assets/footer/linkedin.png";
import twitter from "../assets/footer/twitter.png";
import github from "../assets/footer/github.png";
import instagram from "../assets/footer/instagram.png";
import youtube from "../assets/footer/youtube.png";

export const Footer = () => {
  return (
    <div className="footer" id="contact">
      <h2>Questions?</h2>
      <p>Here's how to reach me!</p>
      <div className="footer-icons-container">
        <FooterIcon id="linkedin" img={linkedin} alt="LinkedIn" />
        <FooterIcon id="twitter" img={twitter} alt="Twitter" />
        <FooterIcon id="github" img={github} alt="GitHub" />
        <FooterIcon id="instagram" img={instagram} alt="Instagram" />
        <FooterIcon id="youtube" img={youtube} alt="YouTube" />
      </div>
      <div className="footer-contact-container">
        <div className="footer-contact">
          <p><strong>email:</strong> {footer_data["email"]}</p>
        </div>
        <div className="footer-divider">|</div>
        <div className="footer-contact">
          <p><strong>discord:</strong> {footer_data["discord"]}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;