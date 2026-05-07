import { DataTypes } from "sequelize";
import { database } from "../config/database.js";

const categories = database.define("Categories", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default categories;
