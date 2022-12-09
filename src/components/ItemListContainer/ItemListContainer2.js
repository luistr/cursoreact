import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//import Catalogo from '../../routes/Catalogo/Catalogo';
import './itemlistcontainer.css';

const ItemListContainer2 = () => {
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
      <h2><Link to='/'>Catálogo</Link> / {id}</h2>

      {producto?.map(({ title, id, category }) => {
        return (
          <div key={id}>
            <strong><Link to={`/item/${id}`}>{title} </Link> </strong>
            /
            <Link to={`/category/${category}`}> {category}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainer2;
