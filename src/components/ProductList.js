import React from "react";
import products from "../products.json";
import { Link } from "react-router-dom";

function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
