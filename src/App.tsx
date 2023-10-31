import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList.tsx";
import ProductDetail from "./components/ProductDetail.tsx";
import Cart from "./components/Cart.tsx";
import coupons from "./coupons.json";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  useEffect(() => {
    localStorage.setItem("coupons", JSON.stringify(coupons));
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
