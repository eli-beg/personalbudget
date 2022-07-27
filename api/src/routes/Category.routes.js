const express = require("express");
const {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} = require("../Controllers/Category.controllers");

const categoryRoutes = express.Router();

categoryRoutes.post("/create-category", createCategory);

categoryRoutes.get("/get-categories", getCategories);

categoryRoutes.put("/update-category", updateCategory);

categoryRoutes.put("/delete-category", deleteCategory);

module.exports = categoryRoutes;
