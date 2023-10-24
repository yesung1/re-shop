import React from "react";
import products from "../products.json";

function ProductDetail({ match }) {
  const id = match.params.id;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductDetail;
