import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/productController.js";
import { upload } from "../config/multer.js";

const route = express.Router();

route.post("/product", upload.single("image"), createProduct);
route.get("/products", getProducts);
route.get("/product/:productId", getSingleProduct);
route.put("/product/:id", upload.single("image"), updateProduct);
route.delete("/product/:id", deleteProduct);

export default route;
