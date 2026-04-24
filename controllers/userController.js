import { std } from "../constant.js";

export const getUsers = (req, res) => {
  res.send(std);
};

export const creatUser = (req, res) => {
  const user = req.body;
  const response = {
    message: "user created successfully",
    data: user,
  };
  res.json(response);
};
