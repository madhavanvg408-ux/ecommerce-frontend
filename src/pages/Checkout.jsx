import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔐 Auth protection
  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
    }
  }, [navigate]);

  // 🛒 Load cart
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // ✅ PLACE ORDER (FIXED)
  const placeOrder = async () => {
    if (!address) {
      alert("Please enter shipping address");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    try {
      setLoading(true);

      const orderData = {
        userId: auth.currentUser.uid,
        items: cartItems.map((item) => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          qty: item.qty,
          image: item.image,
        })),
        shippingAddress: address,
        totalAmount: subtotal,
      };

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/orders`,
        orderData,
        {
          withCredentials: true,
        }
      );

      alert("Order placed successfully!");
      localStorage.removeItem("cart");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* LEFT SIDE */}
      <div style={styles.left}>
        <h2>Checkout</h2>

        <div style={styles.section}>
          <h3>Shipping Address</h3>
          <textarea
            placeholder="Enter your full address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={styles.textarea}
          />
        </div>

        <div style={styles.section}>
          <h3>Review Items</h3>

          {cartItems.map((item) => (
            <div key={item._id} style={styles.item}>
              <img
                src={item.image || "https://via.placeholder.com/120"}
                alt={item.name}
                style={styles.image}
              />
              <div>
                <h4>{item.name}</h4>
                <p>Qty: {item.qty}</p>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>
        <h3>Order Summary</h3>
        <hr />

        <p>Items: ₹{subtotal}</p>
        <p>Shipping: ₹0</p>
        <h2>Total: ₹{subtotal}</h2>

        <button
          style={styles.placeBtn}
          onClick={placeOrder}
          disabled={loading}
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "30px",
    background: "#f3f3f3",
    minHeight: "90vh",
  },
  left: {
    flex: 3,
    background: "#fff",
    padding: "20px",
  },
  right: {
    flex: 1,
    background: "#fff",
    padding: "20px",
    height: "fit-content",
  },
  section: {
    marginTop: "20px",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "10px",
    marginTop: "10px",
  },
  item: {
    display: "flex",
    gap: "15px",
    marginTop: "15px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px",
  },
  image: {
    width: "120px",
  },
  placeBtn: {
    marginTop: "20px",
    width: "100%",
    padding: "12px",
    background: "#f0c14b",
    border: "1px solid #a88734",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "16px",
  },
};

export default Checkout;
