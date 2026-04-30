import { products } from "../constant.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const creatUser = async (req, res) => {
  const body = req.body;
  try {
    const isExistUser = await User.findOne({ where: { email: body.email } });

    if (isExistUser) {
      return res.json({
        status: false,
        message: `This ${body.email} already exist `,
      });
    }

    const hashPassword = await bcrypt.hash(body.password, 10);
    const user = await User.create({ ...body, password: hashPassword });
    const hygienePasswor = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      updatedAt: user.updatedAt,
      createdAt: user.createdAt,
    };

    // const userData = user.toJSON();
    // delete userData.password;

    res.status(201).json({
      success: true,
      message: "user created successfully",
      data: hygienePasswor,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json({
      success: true,
      message: "Retreive all users successfully",
      data: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

export const getSigleUsers = async (req, res) => {
  try {
    const userId = req.params.id;
    const existUser = await User.findOne({ where: { id: userId } });

    if (!existUser) {
      return res.status(404).json({
        success: false,
        message: `user not found with this ${userId}`,
      });
    }

    res.json({
      success: true,
      message: `get single user successfully with this ${userId}`,
      data: existUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Network error`,
      error: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedBody = req.body;

    const existUser = await User.findByPk(userId);

    if (!existUser) {
      return res.status(404).json({
        success: false,
        message: `user not found with this ${userId}`,
      });
    }

    const user = await existUser.update(updatedBody);

    res.json({
      success: true,
      message: `user updated successfully`,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Network error`,
      error: error.message,
    });
  }
};

export const destroyUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const existUser = await User.findOne({ where: { id: userId } });

    if (!existUser) {
      return res.status(404).json({
        success: false,
        message: `user not found with this ${userId}`,
      });
    }

    await existUser.destroy();

    res.json({
      success: true,
      message: `user deleted successfully with this ${userId}`,
      data: existUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Network error`,
      error: error.message,
    });
  }
};
