import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { CartProvider } from "./CartContext";
import coupons from "./coupons.json";

function App() {
  useEffect(() => {
    localStorage.setItem("coupons", JSON.stringify(coupons));
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
