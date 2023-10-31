import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions.tsx";
import products from "../products.json"; // 상품 목록 가져오기

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const product: Product | undefined = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
};

export default ProductDetail;
