import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      {/* Product Image */}
      <div style={styles.imageContainer}>
        <img src={"../src/assets/2.jpg"} alt={product.title} style={styles.image} />
      </div>

      {/* Product Details */}
      <div style={styles.details}>
        <div style={styles.header}>
          <h5 style={styles.title}>{product.title}</h5>
          <h6 style={styles.price}>${product.price}</h6>
        </div>
        <p style={styles.description}>{product.description}</p>

        {/* Actions */}
        <div style={styles.actions}>
          {/* Wishlist Icon */}
          <div style={styles.wishlist} title="Wishlist">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="16px"
            className="wishlist-icon"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              fill="#ff3b5f"
            />
          </svg>

          </div>
    
          {/* Add to Cart Button */}
          <button style={styles.addToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "wheat",
    borderRadius: "8px",
    padding: "16px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
  },
  cardHover: {
    transform: "translateY(-5px)",
  },
  imageContainer: {
    backgroundColor: "wheat",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "16px",
  },
  image: {
    width: "100%",
    objectFit: "contain",
    aspectRatio: "1.5",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: "0.875rem",
    color: "#555",
    marginTop: "8px",
    marginBottom: "8px",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    marginTop: "16px",
    gap: "8px",
  },
  wishlist: {
    backgroundColor: "#ffe3e9",
    width: "48px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  wishlistHover: {
    backgroundColor: "#ffccd4",
  },
  wishlistIcon: {
    fill: "#ff3b5f",
  },
  addToCart: {
    flexGrow: 1,
    height: "36px",
    backgroundColor: "black",
    color: "white",
    fontSize: "0.875rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  addToCartHover: {
    backgroundColor: "#0056b3",
  },
};

export default ProductCard;
