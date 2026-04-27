import express from "express";
import {
  creatUser,
  destroyUser,
  getSigleUsers,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
const route = express.Router();

route.get("/users", getUsers);
route.get("/user/:id", getSigleUsers);
route.post("/user", creatUser);
route.put("/user/:id", updateUser);
route.delete("/user/:id", destroyUser);

export default route;
