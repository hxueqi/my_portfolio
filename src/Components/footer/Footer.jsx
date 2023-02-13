import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        XUEQI HUANG
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#Exprience">Exprience</a>
        </li>
        {/* <li><a href="#Service">Service</a></li> */}
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/xue-qi-huang/">
          {" "}
          <BsLinkedin />
        </a>
        <a href="https://github.com/hxueqi">
          <FaGithub />
        </a>
        <a href="https://www.codewars.com/users/XueqiTao">
          <SiCodewars />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy;Xueqi's personal portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
