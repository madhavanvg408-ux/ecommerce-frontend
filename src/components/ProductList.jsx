import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "React Course" },
  { id: 2, name: "Node Course" },
];

const ProductList = () => {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Products</h1>

      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <h3>{product.name}</h3>

          <button
            style={styles.viewBtn}
            onClick={() => handleView(product.id)}
          >
            View Product
          </button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
  },
  heading: {
    marginBottom: "30px",
  },
  card: {
    padding: "20px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "6px",
  },
  viewBtn: {
    padding: "10px 16px",
    fontSize: "15px",
    cursor: "pointer",
    backgroundColor: "#131921",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
};

export default ProductList;
