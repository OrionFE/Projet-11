import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./../../../public/logo.svg"
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='header'>
      <img src={logo} alt="logo de Kasa" className='logo' />
      <ul className='navbar-list'>
        <li>
          <NavLink to={'/'}>ACCUEIL</NavLink>
        </li>
        <li>
          <NavLink to={'/a-propos'}>A PROPOS</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;