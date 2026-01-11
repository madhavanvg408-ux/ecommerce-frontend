import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(
        "https://ecommerce-backend-kwo1.onrender.com/products"
      );
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Products</h1>

      {products.map((product) => (
        <div key={product._id} style={styles.card}>
          <h3>{product.title}</h3>
          <p>₹{product.price}</p>

          <button
            style={styles.viewBtn}
            onClick={() => navigate(`/product/${product._id}`)}
          >
            View Product
          </button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: { padding: "40px" },
  heading: { marginBottom: "30px" },
  card: {
    padding: "20px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "6px",
  },
  viewBtn: {
    padding: "10px 16px",
    backgroundColor: "#131921",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ProductList;
