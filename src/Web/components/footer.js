import React from "react";
import './footer.css'; // Import your CSS file for styling
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // import social icons

const Footer = () => {
     
    
    return(
        <footer className="footer">
        <ul className="footer-links">
          <li>
            <a href="#home">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#learn">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#signup">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#support">
              <FaGithub />
            </a>
          </li>
        </ul>
      </footer>
    );
};

export default Footer;