import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(
        `https://ecommerce-backend-kwo1.onrender.com/products/${id}`
      );
      setProduct(res.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <h2 style={{ padding: "40px" }}>Loading...</h2>;

  return (
    <div style={{ padding: "40px" }}>
      <div style={styles.container}>
        <img
          src={product.image}
          alt={product.title}
          style={styles.image}
        />

        <div style={styles.info}>
          <h2>{product.title}</h2> {/* ✅ REAL NAME */}
          <p>⭐⭐⭐⭐☆ 4.5</p>
          <h3>₹{product.price}</h3>
          <p>{product.description}</p>

          <button
            style={styles.button}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "40px",
    marginTop: "30px",
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
