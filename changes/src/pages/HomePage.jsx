import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import ProductCard from "../components/Productcard";

const HomePage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products on page load
  }, [dispatch]);

  return (
    <div>
      <h1 style={styles.heading}>Welcome to Our Store</h1>
      {loading && <p style={styles.loading}>Loading products...</p>}
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.container}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  heading: {
    textAlign: "center",
    margin: "20px 0",
    color: "#333",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  loading: {
    textAlign: "center",
    fontSize: "18px",
    color: "#555",
  },
  error: {
    textAlign: "center",
    color: "red",
  },
};

export default HomePage;
