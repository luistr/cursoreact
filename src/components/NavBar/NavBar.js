import React from 'react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget';
import logo from '../../shop.svg';

import './navbar.css';

const NavBar = () => {
  return (
    <div className="topbar">
      <h1 className="logo">
        <img src={logo} alt="Tienda Ejemplo" /> Tienda Azul
      </h1>

      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category">Catálogo</Link>
        </li>
        <li>
          <a href="#"> Pelotas </a>
        </li>
        <li>
          <a href="#"> Robots </a>
        </li>
        <li>
          <a href="#"> Drones </a>
        </li>
      </ul>

      <div className="cart">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
