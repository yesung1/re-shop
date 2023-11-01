import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList.tsx";
import ProductDetail from "./components/ProductDetail.tsx";
import Cart from "./components/Cart.tsx";
import coupons from "./coupons.json";
import { Provider } from "react-redux";
import store from "./store";
import MainPage from "./components/MainPage.tsx";
import SignUp from "./components/SignUp.tsx";
import Login from "./components/Login.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    localStorage.setItem("coupons", JSON.stringify(coupons));
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/list" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sign" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
