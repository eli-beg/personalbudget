const express = require("express");
const {
  createUser,
  deleteUser,
  loginUser,
} = require("../Controllers/User.controllers");

const userRoutes = express.Router();

userRoutes.post("/create-user", createUser);

userRoutes.delete("/delete-user", deleteUser); //todavia no la use y no se si la voy a usar

userRoutes.post("/login-user", loginUser);

module.exports = userRoutes;
