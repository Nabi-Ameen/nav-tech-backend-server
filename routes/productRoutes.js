import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/productController.js";

const route = express.Router();

route.get("/products", getProducts);
route.get("/product/:productId", getSingleProduct);
route.post("/product", createProduct);
route.put("/product/:id", updateProduct);
route.delete("/product/:id", deleteProduct);

export default route;
