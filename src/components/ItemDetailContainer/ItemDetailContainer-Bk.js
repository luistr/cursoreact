import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
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
      <p>Eye: {item?.eye_color}</p>
      <p>Hair: {item?.hair_color}</p>
    </div>
  );
};

export default ItemDetailContainer;
