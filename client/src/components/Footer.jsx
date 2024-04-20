import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with ♥️ by <b>Students of PDEU</b>.
      </span>
    </footer>
  );
};

export default Footer;
