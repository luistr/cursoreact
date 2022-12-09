import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) =>{

  return(

    <div>
      <img src={item.image} alt="" width="40px" />
      <strong>
        <Link to={`/item/${item.id}`}>{item.title} </Link>
      </strong>
      /<Link to={`/category/${item.category}`}> {item.category}</Link>
    </div>

  );
};

export default Item;