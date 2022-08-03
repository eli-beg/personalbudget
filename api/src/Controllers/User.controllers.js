const express = require("express");
const { User } = require("../db");

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
  } catch (error) {
    return res.status(400).send({
      ok: false,
      msg: error,
    });
  }
};

module.exports = { createUser, deleteUser };
