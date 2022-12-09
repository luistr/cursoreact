import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './itemlistcontainer.css';

const ItemListContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);

  const fetchUrl = 'https://fakestoreapi.com/products';
  const fetchUrlId = id ? fetchUrl + '/category/' + id : fetchUrl;
  //console.log(fetchUrlId);

  useEffect(() => {
    fetch(fetchUrlId)
      .then((res) => res.json())
      .then(setProducto);
    //.then(json=>console.log(json))
  }, [id]);


  return (
    <div>
      <h2>
        <Link to="/">Catálogo</Link> / {id}
      </h2>

      <ItemList producto={producto} />

    </div>
  );
};

export default ItemListContainer;
