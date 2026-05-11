import express from "express";
import {
  creatUser,
  destroyUser,
  getSigleUsers,
  getUsers,
  loginUser,
  updateUser,
} from "../controllers/userController.js";
import { authenticateUser } from "../auth/authentication.js";
const route = express.Router();

route.post("/login", loginUser);

route.post("/user", creatUser);

route.get("/users", authenticateUser, getUsers);

route.get("/user/:id", getSigleUsers);
route.put("/user/:id", updateUser);
route.delete("/user/:id", destroyUser);

export default route;
