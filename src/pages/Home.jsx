import { Link } from "react-router-dom";

// Import your local images
import HeroImg from "../assets/hero.jpg"; // Hero background image
import Product1 from "../assets/product1.jpg";
import Product2 from "../assets/product2.jpg";
import Product3 from "../assets/product3.jpg";
import Product4 from "../assets/product4.jpg";

const Home = () => {
  // Array of products with images, names, and prices
  const products = [
    { id: 1, name: "Mobiles", price: 9999, img: Product1 },
    { id: 2, name: "Laptops", price: 29999, img: Product2 },
    { id: 3, name: "Headphones", price: 999, img: Product3 },
    { id: 4, name: "Airpods", price: 1499, img: Product4 },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section
        style={{
          ...styles.hero,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${HeroImg})`,
        }}
      >
        <div>
          <h1 style={styles.heroTitle}>Discover the Latest Technologies</h1>
          <p style={styles.heroText}>Shop the best products at unbeatable prices</p>
          <Link to="/products">
            <button style={styles.heroBtn}>Shop Now</button>
          </Link>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Upcoming Products</h2>

        <div style={styles.grid}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <img src={product.img} alt={product.name} style={styles.img} />
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
              {/* Removed the View button */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    height: "80vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    paddingLeft: "60px",
    color: "#fff",
  },
  heroTitle: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  heroText: {
    fontSize: "18px",
    marginBottom: "25px",
  },
  heroBtn: {
    padding: "12px 30px",
    fontSize: "16px",
    background: "#ff9900",
    border: "none",
    cursor: "pointer",
  },
  section: {
    padding: "50px",
  },
  sectionTitle: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "32px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "350px", // ensures all cards have same height
  },
  img: {
    width: "100%",
    height: "200px",      // fixed height for all images
    objectFit: "cover",   // maintain aspect ratio, crop if needed
    marginBottom: "15px",
    borderRadius: "8px",
  },
};


export default Home;
