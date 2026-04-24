import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
} from "./controllers/productController.js";
import { creatUser, getUsers } from "./controllers/userController.js";
const app = express();
const port = 9000;

app.use(express.json());

const std = {
  id: 1,
  name: "ali",
  address: "abcd peshawar",
  age: 30,
};

app.get("/products", getProducts);
app.get("/product/:productId", getSingleProduct);
app.post("/product", createProduct);
app.put("/product/:id", updateProduct);
app.delete("/product/:id", deleteProduct);

// user end points
app.get("/users", getUsers);
app.post("/user", creatUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
