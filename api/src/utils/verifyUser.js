const express = require("express");
const { SECRET } = process.env;
const jwt = require("jsonwebtoken");

const verifyUser = async (authorization) => {
  let token = null;

  if (authorization && authorization.includes("Bearer")) {
    token = authorization.replace("Bearer ", "");
  }

  let decodedToken = {};
  try {
    decodedToken = jwt.verify(token, SECRET);
  } catch (e) {
    console.log(e);
  }

  if (!token || !decodedToken.id) {
    return res.status(401).send({
      error: "token missing or invalid",
    });
  } else return decodedToken;
};
module.exports = { verifyUser };
