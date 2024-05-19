const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const router = require("./routes/product.route.js");
const express = require("express");
const app = express();
const productRoute = require("./routes/product.route");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the home");
});

mongoose
  .connect(
    "mongodb+srv://khpoly0:Dq9oQjgXN2ldBPhj@backenddb.mug7h1b.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });

    console.log("Connected to the database!");
  })
  .catch(() => {
    console.log("Connection failed");
  });
