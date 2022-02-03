import React from "react";
import { Link } from "react-router-dom";
import footerSytles from '../styles/FooterStyles.module.css';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function FooterSection() {
  return (
    <div className={footerSytles.footer}>
      <div className={footerSytles.footerFirst}>
        <img src="./images/logo.png" alt="logo" />
        <p>
          ChitHub Traffic System Management Company Ltd (CTSMC), is an
          innovative smart city technology company registered in Nigeria with
          expertise in implementing road use enforcement solutions using
          artificial intelligence and Internet of Things (IoT) technology.
        </p>
      </div>
      <div className={footerSytles.footerSecond}>
        <h2>Quick Menu</h2>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about-us">
            <li>About Us</li>
          </Link>
          <Link to="/solutions">
            <li>Our Solution</li>
          </Link>
          <Link to="/contact-us">
            <li>Our Contact</li>
          </Link>
        </ul>
      </div>
      <div className={footerSytles.footerThird}>
        <h2>Contact Us</h2>
        <ul>
          <Link to="">
            <li className={footerSytles.footerAddress}><ContactMailIcon />
              <span >Suit D08, VGI Centre, Ngozi Okonjo <br /> Iweala Street, <br /> Wuye, Abuja,<br />
              Nigeria</span>
            </li>
          </Link>
          
          <a href="tel:+234(803) 880‐0629">
            <li><EmailIcon /> <span>+234(803) 880‐0629</span></li>
          </a>
          <a href="mailto:contact@echithub.com">
            <li><LocalPhoneIcon />
                <span>contact@echithub.com</span></li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default FooterSection;
