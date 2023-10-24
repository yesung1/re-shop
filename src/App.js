import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:id" component={ProductDetail} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
