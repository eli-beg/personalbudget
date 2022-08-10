const express = require("express");
const { Category } = require("../db");
const { SECRET } = process.env;
const jwt = require("jsonwebtoken");
const { verifyUser } = require("../utils/verifyUser");

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const authorization = req.get("Authorization");

    const aprobedUser = await verifyUser(authorization);
    if (aprobedUser) {
      const [newCategory, created] = await Category.findOrCreate({
        where: { name: name, status: "active", userId: aprobedUser.id },
      });

      if (newCategory) {
        return res.status(200).send({
          ok: true,
          created: created,
          category: newCategory,
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

const getCategories = async (req, res) => {
  try {
    const authorization = req.get("Authorization");

    const aprobedUser = await verifyUser(authorization);

    if (aprobedUser) {
      const getCategories = await Category.findAll({
        where: {
          status: "active",
          userId: aprobedUser.id,
        },
      });
      if (getCategories) {
        return res.status(200).send({
          ok: true,
          getCategories: getCategories,
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

const updateCategory = async (req, res) => {
  const { id, name } = req.body;
  try {
    const authorization = req.get("Authorization");

    const aprobedUser = await verifyUser(authorization);

    if (aprobedUser) {
      const updateCategory = await Category.update(
        {
          name: name,
        },
        {
          where: {
            id: id,
            userId: aprobedUser.id,
          },
        }
      );
      if (updateCategory) {
        const updatedCategory = await Category.findByPk(id);
        if (updatedCategory) {
          return res.status(200).send({
            ok: true,
            updatedCategory: updatedCategory,
          });
        }
      }
    }
  } catch (error) {
    return res.status(400).send({
      ok: false,
      msg: error,
    });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.body;
  try {
    const authorization = req.get("Authorization");

    const aprobedUser = await verifyUser(authorization);

    if (aprobedUser) {
      const deleteCategory = await Category.update(
        {
          status: "inactive",
        },
        {
          where: {
            id: id,
            userId: aprobedUser.id,
          },
        }
      );
      if (deleteCategory) {
        return res.status(200).send({
          ok: true,
          deleteCategory: "The category has been removed!",
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

module.exports = {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
};
