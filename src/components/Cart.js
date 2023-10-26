import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import coupons from "../coupons.json";

function Cart() {
  const { cartItems, removeFromCart, changeQuantity, calculateTotal } =
    useContext(CartContext);
  const [couponCode, setCouponCode] = useState("");
  const [total, setTotal] = useState(calculateTotal());

  useEffect(() => {
    setTotal(calculateTotal());
  }, [cartItems]);

  function applyCoupon() {
    const coupon = coupons.find((c) => c.code === couponCode);

    if (coupon) {
      setTotal(calculateTotal() * (1 - coupon.discount));
      alert("Coupon applied!");
    } else {
      alert("Invalid coupon code.");
    }

    setCouponCode("");
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => changeQuantity(item.id, e.target.value)}
          />
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <br />
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter coupon code"
      />
      <button onClick={applyCoupon}>Apply</button>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
