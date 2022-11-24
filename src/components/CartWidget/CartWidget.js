import React from 'react';
import './cartwidget.css';
import cart from '../../cart.svg';

const CartWidget = () => {
  return (
    <div className = "carrito" > <img src = {cart} alt = "Items" />  3 </div>
  );
};

export default CartWidget;