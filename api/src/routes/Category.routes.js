const express = require("express");
const {
  createCategory,
  deleteCategory,
  getCategories,
} = require("../Controllers/Category.controllers");

const categoryRoutes = express.Router();

categoryRoutes.post("/create-category", createCategory);

categoryRoutes.get("/get-categories", getCategories);

categoryRoutes.delete("/delete-category", deleteCategory);

module.exports = categoryRoutes;
