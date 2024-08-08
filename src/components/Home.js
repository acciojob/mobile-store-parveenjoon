import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Samsung Galaxy S8', price: 16303, color: 'Black' },
  { id: 2, name: 'Samsung Galaxy S9', price: 20888, color: 'Black' },
  { id: 3, name: 'Samsung Galaxy S8+', price: 18701, color: 'Black' },
];

function Home() {
  return (
    <div>
      <h1>Home</h1>
      {products.map(product => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            {product.name} {product.color}
          </Link>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
