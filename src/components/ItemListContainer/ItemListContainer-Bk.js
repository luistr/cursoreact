import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//import Catalogo from '../../routes/Catalogo/Catalogo';
import './itemlistcontainer.css';

const ItemListContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    //fetch(`https://swapi.dev/api/people/${id}`)
    fetch(`https://swapi.dev/api/people/`)
      .then((res) => res.json())
      .then(setProducto);
    //.then(json=>console.log(json));
  }, [id]);

  return (
    <div>
      <h1>Catalogo</h1>

      {producto.results?.map((char) => {
        const id = char.url.split('/')[5];
        return (
          <div key={id}>
            <Link to={`/item/${id}`}>{char.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainer;