// src/components/product/ProductList.jsx
import React from 'react';
import Product from './Product';
// import './Product.css';

function ProductList() {
  const products = [
    { title: 'Product 1', description: 'This is the description of product 1', price: 29.99 },
    { title: 'Product 2', description: 'This is the description of product 2', price: 49.99 },
    { title: 'Product 3', description: 'This is the description of product 3', price: 19.99 },
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
