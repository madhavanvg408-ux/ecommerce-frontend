import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = {
    _id: id,
    name: "Product Name",
    price: 2999,
    image: "https://via.placeholder.com/400",
    description:
      "This is a high quality product with excellent performance and durability.",
  };

  return (
    <div style={styles.container}>
      <img
        src={product.image}
        alt={product.name}
        style={styles.image}
      />

      <div style={styles.info}>
        <h2>{product.name}</h2>
        <p>⭐⭐⭐⭐☆ 4.5</p>
        <h3 style={{ margin: "15px 0" }}>₹{product.price}</h3>

        <p>{product.description}</p>

        <button
          style={styles.button}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

/* 🔴 THIS WAS MISSING OR MISPLACED */
const styles = {
  container: {
    display: "flex",
    gap: "40px",
    padding: "40px",
  },
  image: {
    width: "350px",
    borderRadius: "8px",
  },
  info: {
    maxWidth: "400px",
  },
  button: {
    marginTop: "20px",
    padding: "12px",
    width: "100%",
    background: "#f0c14b",
    border: "1px solid #a88734",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default ProductDetails;
