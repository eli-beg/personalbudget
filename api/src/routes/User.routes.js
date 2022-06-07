const express = require("express");
const { createUser, deleteUser } = require("../Controllers/User.controllers");

const userRoutes = express.Router();

userRoutes.post("/create-user", createUser);

userRoutes.delete("/delete-user", deleteUser);

module.exports = userRoutes;
