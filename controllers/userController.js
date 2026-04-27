import { products } from "../constant.js";

export const getUsers = (req, res) => {
  res.json({
    message: "get all users successfully",
    data: products,
  });
};

export const getSigleUsers = (req, res) => {
  res.json("get single user");
};

export const creatUser = (req, res) => {
  const user = req.body;
  const response = {
    message: "user created successfully",
    data: user,
  };
  res.json(response);
};

export const updateUser = (req, res) => {
  res.json("user updated successfully");
};

export const destroyUser = (req, res) => {
  res.json("user deleted successfully");
};
