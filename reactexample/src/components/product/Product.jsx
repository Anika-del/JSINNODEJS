// src/components/product/Product.jsx

import React from 'react';

function Product({ title, description, price }) {
  return (
    <div className="product">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default Product;
