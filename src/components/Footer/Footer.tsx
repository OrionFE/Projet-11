import React from 'react';
import logo from "./../../../public/logoFooter.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={logo} alt="logo de Kasa" className='logo-footer' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;