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
          <Link to="/category/men's clothing">Men's Clothing</Link>
        </li>
        <li>
          <Link to="/category/jewelery">Jewelery</Link>
        </li>
        <li>
          <Link to="/category/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/category/women's clothing">Women's Clothing</Link>
        </li>
      </ul>

      <div className="cart">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
