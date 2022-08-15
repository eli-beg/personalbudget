const express = require("express");
const {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} = require("../Controllers/Category.controllers");
const { validateAuth } = require("../middleware/validateAuth");

const categoryRoutes = express.Router();

categoryRoutes.post("/create-category", validateAuth, createCategory);

categoryRoutes.get("/get-categories", validateAuth, getCategories);

categoryRoutes.put("/update-category", validateAuth, updateCategory);

categoryRoutes.put("/delete-category", validateAuth, deleteCategory);

module.exports = categoryRoutes;
