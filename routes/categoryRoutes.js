import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getSigleCategory,
  updateCategory,
} from "../controllers/categoryControllers.js";
const route = express.Router();

route.post("/category", createCategory);
route.get("/categories", getAllCategories);
route.get("/category/:id", getSigleCategory);
route.put("/category/:id", updateCategory);
route.delete("/category/:id", deleteCategory);

export default route;
