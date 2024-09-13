 

import React from 'react';
import './ProductList.css';

function ProductList({ products }) {
  return (
    <div className="product-list">
      <h2>Naši Proizvodi</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price} €</p>
            <button className="buy-btn">Kupi</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
