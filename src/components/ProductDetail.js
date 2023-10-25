import React, { useContext } from "react";
import products from "../products.json";
import { CartContext } from "../CartContext";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

export default ProductDetail;
