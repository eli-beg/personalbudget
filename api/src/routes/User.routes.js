const express = require("express");
const {
  createUser,
  deleteUser,
  loginUser,
} = require("../Controllers/User.controllers");

const userRoutes = express.Router();

userRoutes.post("/create-user", createUser);

userRoutes.put("/delete-user", deleteUser);

userRoutes.post("/login-user", loginUser);

module.exports = userRoutes;
