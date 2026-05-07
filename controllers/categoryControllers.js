import categories from "../models/categoryModel.js";

export const createCategory = async (req, res) => {
  try {
    const body = req.body;
    const category = await categories.create(body);

    res.status(201).json({
      status: true,
      message: "category created successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Network Error",
      error: error.message,
    });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categoriesData = await categories.findAll();

    res.status(200).json({
      status: true,
      message: "get all categories successfully",
      data: categoriesData,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Network Error",
      error: error.message,
    });
  }
};

export const getSigleCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const categoriesData = await categories.findByPk(id);

    if (!categoriesData) {
      return res.status(404).json({
        status: false,
        message: "category not foune",
      });
    }
    res.status(200).json({
      status: true,
      message: "get single category",
      data: categoriesData,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Network Error",
      error: error.message,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;

    const existCategory = await categories.findByPk(id);
    if (!existCategory) {
      return res.status(404).json({
        success: false,
        message: `category not found with this id: ${id}`,
      });
    }

    const category = await existCategory.update(body);

    res.status(201).json({
      status: true,
      message: "category created successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Network Error",
      error: error.message,
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const categoriesData = await categories.findByPk(id);

    if (!categoriesData) {
      return res.status(404).json({
        status: false,
        message: "category not found",
      });
    }

    await categoriesData.destroy();
    res.status(200).json({
      status: true,
      message: "delete category",
      data: categoriesData,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Network Error",
      error: error.message,
    });
  }
};
