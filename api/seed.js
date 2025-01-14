const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productData = require("./seedData.js");
const Product = require("./models/product.js");
dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connection Initiated");
}

const seedDb = async () => {
  await Product.deleteMany({});
  for (let i = 0; i < 100; i++) {
    const product = new Product({
      name: productData[i].title,
      price: productData[i].price,
      category: productData[i].category,
      description: productData[i].description,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    });

    await product.save();
  }
};

seedDb().then(() => {
  mongoose.connection.close();
});
