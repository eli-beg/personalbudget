const express = require("express");
const { User } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { verifyUser } = require("../utils/verifyUser");

const createUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const newUser = await User.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      status: "active",
    });
    if (newUser) {
      return res.status(200).send({
        ok: true,
        newUser: newUser,
      });
    }
  } catch (error) {
    return res.status(400).send({
      ok: false,
      msg: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    const authorization = req.get("Authorization");

    const aprobedUser = await verifyUser(authorization);
    if (aprobedUser) {
      const deleteUser = await User.update(
        {
          status: "inactive",
        },
        {
          where: {
            id: id,
          },
        }
      );
      if (deleteUser) {
        return res.status(200).send({
          ok: true,
          deleteUser: "User has been removed!",
        });
      }
    }
  } catch (error) {
    return res.status(400).send({
      ok: false,
      msg: error,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userValues = await User.findOne({
      where: { email: email, status: "active" },
      attributes: ["firstname", "lastname", "email", "password", "id"],
    });

    if (userValues) {
      const passwordCorrect = await bcrypt.compare(
        password,
        userValues.dataValues.password
      );

      if (passwordCorrect) {
        const userForToken = {
          id: userValues.dataValues.id,
          email: userValues.dataValues.email,
        };

        const token = jwt.sign(userForToken, SECRET);

        return res.status(200).send({
          ok: true,
          userEmail: userValues.dataValues.email,
          userFirstname: userValues.dataValues.firstname,
          userLastname: userValues.dataValues.lastname,
          id: userValues.dataValues.id,
          token,
        });
      } else
        return res.status(200).send({
          ok: false,
          msg: "Invalid email or password",
        });
    }
    if (userValues === null) {
      return res.status(200).send({
        ok: false,
        msg: "Invalid email or password",
      });
    }
  } catch (error) {
    return res.status(401).send({
      ok: false,
      msg: "Invalid email or password",
    });
  }
};

module.exports = { createUser, deleteUser, loginUser };
