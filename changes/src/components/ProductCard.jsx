import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} style={styles.button}>
        View Details
      </Link>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "3px",
  },
};

export default ProductCard;
