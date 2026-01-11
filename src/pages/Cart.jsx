import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useCart();

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQty = (id, qty) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, qty: Number(qty) } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={styles.container}>
      {/* LEFT */}
      <div style={styles.left}>
        <h2>Shopping Cart</h2>
        <hr />

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item._id} style={styles.item}>
              <img
                src={item.image || "https://via.placeholder.com/150"}
                alt={item.name}
                style={styles.image}
              />

              <div style={styles.details}>
                <h4>{item.name}</h4>
                <p style={styles.price}>₹{item.price}</p>

                <select
                  value={item.qty}
                  onChange={(e) => updateQty(item._id, e.target.value)}
                  style={styles.select}
                >
                  {[1, 2, 3, 4, 5].map((x) => (
                    <option key={x} value={x}>
                      Qty: {x}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => removeItem(item._id)}
                  style={styles.removeBtn}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* RIGHT */}
      <div style={styles.right}>
        <h3>
          Subtotal ({cart.reduce((a, c) => a + c.qty, 0)} items)
        </h3>
        <h2>₹{subtotal}</h2>

        <button
          style={styles.checkoutBtn}
          onClick={() => navigate("/checkout")}
          disabled={cart.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    padding: "30px",
    gap: "20px",
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
  item: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    paddingBottom: "20px",
    borderBottom: "1px solid #ddd",
  },
  image: {
    width: "150px",
    objectFit: "cover",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  price: {
    fontWeight: "bold",
  },
  select: {
    width: "120px",
    padding: "5px",
  },
  removeBtn: {
    background: "none",
    border: "none",
    color: "#007185",
    cursor: "pointer",
    padding: 0,
    textAlign: "left",
  },
  checkoutBtn: {
    marginTop: "15px",
    width: "100%",
    padding: "10px",
    background: "#f0c14b",
    border: "1px solid #a88734",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "16px",
  },
};

export default Cart;
