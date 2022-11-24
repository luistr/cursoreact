import React from 'react';
import './itemlistcontainer.css';

const ItemListContainer = ({greeting}) => {
  return (
    <div className = "saludo"> {greeting} </div>
  );
};

export default ItemListContainer;