import React, { useState } from 'react';

const ItemCount = () => {
  const [contador, setContador] = useState(1);

  const buttonContadorClickMas = () => {
    setContador(contador + 1);
  };
  const buttonContadorClickMenos = () => {
    (contador > 1) ? setContador(contador - 1) : contador;
  };

  return (
    <div>
      <button onClick={buttonContadorClickMas}>+</button>
       <strong>{contador}</strong>
      <button onClick={buttonContadorClickMenos}>-</button>
    </div>
  );

};

export default ItemCount;