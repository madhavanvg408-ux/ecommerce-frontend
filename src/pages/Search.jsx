import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Search = () => {
  const { keyword } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem("products")) || [];
    const filtered = allProducts.filter((p) =>
      p.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setProducts(filtered);
  }, [keyword]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search results for "{keyword}"</h2>

      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p._id} style={styles.card}>
            <img src={p.image} alt={p.name} style={styles.img} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    background: "#fff",
    padding: "10px",
    border: "1px solid #ddd",
  },
  img: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
  },
};

export default Search;
