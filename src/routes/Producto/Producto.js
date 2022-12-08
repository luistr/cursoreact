import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Producto = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((res) => res.json())
      .then(setItem);
  }, [id]);

  return (
    <div>
      <p>Name: {item?.name}</p>
      <p>Height: {item?.height}</p>
    </div>
  );
};

export default Producto;
