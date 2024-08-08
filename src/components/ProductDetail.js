
import React from 'react';

const products = [
  { id: 1, name: 'Samsung Galaxy S8', price: 16303, color: 'Black' },
  { id: 2, name: 'Samsung Galaxy S9', price: 20888, color: 'Black' },
  { id: 3, name: 'Samsung Galaxy S8+', price: 18701, color: 'Black' },
];

function ProductDetail({ match }) {
  const productId = parseInt(match.params.id);
  const product = products.find(p => p.id === productId);

  return (
    <div>
      <h1>Product Detail</h1>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Color: {product.color}</p>
        </div>
      ) : (
        <p>Product not found!</p>
      )}
    </div>
  );
}

export default ProductDetail;
