import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './itemlistcontainer.css';

import data from '../../data.json';

const ItemListContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);

  const fetchUrl = 'https://fakestoreapi.com/products';
  const fetchUrlId = id ? fetchUrl + '/category/' + id : fetchUrl;
  
  useEffect(() => {
    
    if (id) {

      console.log('fetch')
      
      fetch(fetchUrlId)
        .then((res) => res.json())
        .then(setProducto);

    }else{

      console.log('promesa')

      const promesa = new Promise ((resolve)=>{
        setTimeout(() => {
          resolve(data)
        }, 2000)
      })
        .then(setProducto)
    }

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
