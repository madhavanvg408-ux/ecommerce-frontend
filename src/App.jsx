import { Routes, Route, Navigate } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />


      <Routes>
        {/* Default */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />


        {/* 404 */}
        <Route
          path="*"
          element={<h2 style={{ textAlign: "center" }}>Thanks for Purchasing</h2>}
        />
      
      </Routes>
    </>
  );
}

export default App;
