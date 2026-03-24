import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Designed & Built by Harshil Gohti — {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
