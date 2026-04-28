import { products } from "../constant.js";
import User from "../models/userModel.js";

export const creatUser = async (req, res) => {
  const body = req.body;
  try {
    const user = await User.create(body);
    res.json({
      success: true,
      message: "user created successfully",
      data: user,
    });
  } catch (error) {
    res.json({
      message: "internal server error",
      error: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();

    res.json({
      success: true,
      message: "Retreive all users successfully",
      data: allUsers,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

export const getSigleUsers = (req, res) => {
  res.json("get single user");
};

export const updateUser = (req, res) => {
  res.json("user updated successfully");
};

export const destroyUser = (req, res) => {
  res.json("user deleted successfully");
};
