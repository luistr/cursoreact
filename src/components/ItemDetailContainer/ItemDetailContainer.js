import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import data from '../../data.json';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    //fetch(`https://fakestoreapi.com/products/${id}`)
    //  .then((res) => res.json())
    //  .then(setItem);

      console.log(data[id-1])

      const promesa = new Promise ((resolve)=>{
        setTimeout(() => {
          resolve(data[id-1]) // accede al objeto
        }, 2000)
      })
        .then(setItem)

  }, [id]);

  return (
    <div>
      <p><Link to='/'>Home</Link> / <Link to={`/category/${item?.category}`}> {item?.category}</Link></p>

      <h2>{item?.title}</h2>
      <p>Precio: {item?.price}</p>
      <p>{item?.description}</p>
      <p>
        <img src={item?.image} alt="" width="300px" />
      </p>
    </div>
  );
};

export default ItemDetailContainer;
