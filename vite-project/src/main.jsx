import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Products from "./pages/Products.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/NewPage" element={<Products />}></Route>
        <Route path="/:id" element={<SingleProduct />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
