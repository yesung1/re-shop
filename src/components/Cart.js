import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function Cart() {
  const { cartItems, removeFromCart, changeQuantity, calculateTotal } =
    useContext(CartContext);
  const total = calculateTotal();

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
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      ))}
    </div>
  );
}

export default Cart;
