import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // ✅ HOME
    } catch (err) {
      alert("User not found. Please register.");
      navigate("/register");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Welcome Back</h2>

        <form onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button style={styles.button}>Login</button>
        </form>

        <p>
          Don’t have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c') center/cover",
  },
  card: {
    background: "#fff",
    padding: "40px",
    width: "350px",
    borderRadius: "8px",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
    fontSize: "28px",
  },
  subtitle: {
    marginBottom: "25px",
    color: "#666",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#111",
    color: "#fff",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "10px",
  },
  text: {
    marginTop: "20px",
    fontSize: "14px",
  },
  link: {
    color: "#ff9900",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Login;
