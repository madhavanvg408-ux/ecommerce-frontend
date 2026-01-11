import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={styles.navbar}>
      {/* Logo */}
      <h1 style={styles.logo} onClick={() => navigate("/")}>
        Shopee
      </h1>

      {/* Right Actions */}
      <div style={styles.actions}>
        {!user ? (
          <button style={styles.button} onClick={() => navigate("/login")}>
            Sign In
          </button>
        ) : (
          <button style={styles.button} onClick={() => signOut(auth)}>
            Logout
          </button>
        )}

        <button style={styles.cartBtn} onClick={() => navigate("/cart")}>
          🛒 Cart
        </button>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 40px",
    height: "80px",
    backgroundColor: "#131921",
    color: "#fff",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "700",
    cursor: "pointer",
    letterSpacing: "1px",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  button: {
    backgroundColor: "#232f3e",
    color: "#fff",
    border: "1px solid #fff",
    padding: "10px 18px",
    fontSize: "16px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  cartBtn: {
    backgroundColor: "#febd69",
    color: "#000",
    border: "none",
    padding: "10px 18px",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Navbar;
