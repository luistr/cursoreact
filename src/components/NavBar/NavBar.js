import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../shop.svg';

import './navbar.css';

const NavBar = () => {
  return (
    <div className = "topbar"> 

      <h1 className = "logo">
        <img src = {logo} alt = "Tienda Ejemplo" /> Tienda Azul  
      </h1> 

      <ul className = "nav">
          <li> <a href="#"> Juegos </a> </li>
          <li> <a href="#"> Autitos </a> </li>
          <li> <a href="#"> Pelotas </a> </li>
          <li> <a href="#"> Robots </a> </li>
          <li> <a href="#"> Drones </a> </li>
      </ul>

      <div className = "cart"> <CartWidget /> </div>

    </div>
  );
};

export default NavBar;