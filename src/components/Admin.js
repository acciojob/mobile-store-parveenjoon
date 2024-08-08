
import React, { useState } from 'react';

const initialProducts = [
  { id: 1, name: 'Samsung Galaxy S8', price: 16303, color: 'Black' },
  { id: 2, name: 'Samsung Galaxy S9', price: 20888, color: 'Black' },
  { id: 3, name: 'Samsung Galaxy S8+', price: 18701, color: 'Black' },
];

function Admin() {
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleSave = () => {
    setProducts(products.map(p => (p.id === editingProduct.id ? editingProduct : p)));
    setEditingProduct(null);
  };

  return (
    <div>
      <h1>Admin</h1>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Color: {product.color}</p>
          <button onClick={() => handleEdit(product)}>Edit</button>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
      {editingProduct && (
        <div>
          <h2>Edit Product</h2>
          <input
            type="text"
            value={editingProduct.name}
            onChange={e => setEditingProduct({ ...editingProduct, name: e.target.value })}
          />
          <input
            type="number"
            value={editingProduct.price}
            onChange={e => setEditingProduct({ ...editingProduct, price: parseInt(e.target.value) })}
          />
          <input
            type="text"
            value={editingProduct.color}
            onChange={e => setEditingProduct({ ...editingProduct, color: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
}

export default Admin;
