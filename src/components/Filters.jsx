const Filters = ({ categories, setCategory, setPrice }) => {
  return (
    <div style={styles.filterBox}>
      <h3>Filters</h3>

      {/* CATEGORY */}
      <div>
        <h4>Category</h4>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* PRICE */}
      <div>
        <h4>Price</h4>
        <select onChange={(e) => setPrice(e.target.value)}>
          <option value="">All</option>
          <option value="0-500">₹0 - ₹500</option>
          <option value="500-1000">₹500 - ₹1000</option>
          <option value="1000-5000">₹1000 - ₹5000</option>
        </select>
      </div>
    </div>
  );
};

const styles = {
  filterBox: {
    width: "220px",
    padding: "15px",
    border: "1px solid #ddd",
    background: "#fff",
  },
};

export default Filters;
