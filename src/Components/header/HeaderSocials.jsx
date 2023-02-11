import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/xue-qi-huang/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/hxueqi" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.codewars.com/users/XueqiTao" target="_blank">
        <SiCodewars />
      </a>
    </div>
  );
};

export default HeaderSocials;
