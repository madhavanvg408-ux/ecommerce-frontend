import { Link } from "react-router-dom";

// Import local product images
import Headphones from "../assets/headphones.jpg";
import SmartWatch from "../assets/smartwatch.jpg";
import Speaker from "../assets/speaker.jpg";
import Mouse from "../assets/mouse.jpg";

const Products = () => {
  const products = [
    {
      _id: 1,
      name: "Wireless Headphones",
      price: 2999,
      rating: 4.5,
      image: Headphones,
    },
    {
      _id: 2,
      name: "Smart Watch",
      price: 4999,
      rating: 4.2,
      image: SmartWatch,
    },
    {
      _id: 3,
      name: "Bluetooth Speaker",
      price: 1999,
      rating: 4.3,
      image: Speaker,
    },
    {
      _id: 4,
      name: "Gaming Mouse",
      price: 1499,
      rating: 4.6,
      image: Mouse,
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Products</h2>

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product._id} style={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.image}
            />

            <h4 style={styles.name}>{product.name}</h4>
            <p style={styles.rating}>⭐ {product.rating} / 5</p>
            <h3 style={styles.price}>₹{product.price}</h3>

            <Link to={`/product/${product._id}`}>
              <button style={styles.button}>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ✅ styles MUST be defined BEFORE export */
const styles = {
  container: {
    padding: "40px",
  },
  title: {
    marginBottom: "30px",
    fontSize: "32px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "25px",
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "6px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  name: {
    fontSize: "16px",
    marginBottom: "8px",
  },
  rating: {
    color: "#f0c14b",
    fontSize: "14px",
  },
  price: {
    margin: "10px 0",
  },
  button: {
    padding: "8px",
    width: "100%",
    background: "#f0c14b",
    border: "1px solid #a88734",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Products;
