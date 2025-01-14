const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products", err);
    res.status(500).json({ message: "Error fetching products" });
  }
});

// Add a new product (for testing purposes)
router.post("/", async (req, res) => {
  try {
    const { name, price, category, description, image } = req.body;
    const newProduct = new Product({
      name,
      price,
      category,
      description,
      image,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Error adding product", err);
    res.status(500).json({ message: "Error adding product" });
  }
});

module.exports = router;
