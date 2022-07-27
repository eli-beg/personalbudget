const express = require("express");
const { Category } = require("../db");

const createCategory = async (req, res) => {
  const { name, userId } = req.body;
  try {
    const [newCategory, created] = await Category.findOrCreate({
      where: { name: name, status: "active", userId: null },
    });

    if (newCategory) {
      return res.status(200).send({
        ok: true,
        created: created,
        category: newCategory,
      });
    }
  } catch (error) {
    return res.status(400).send({
      ok: false,
      msg: error,
    });
  }
};

const getCategories = async (req, res) => {
  const { userId } = req.body;
  try {
    const getCategories = await Category.findAll({
      where: {
        status: "active",
        userId: null,
      },
    });
    if (getCategories) {
      return res.status(200).send({
        ok: true,
        getCategories: getCategories,
      });
    }
  } catch (error) {
    return res.status(400).send({
      ok: false,
      msg: error,
    });
  }
};

const updateCategory = async (req, res) => {
  const { id, name, userId } = req.body;
  try {
    const updateCategory = await Category.update(
      {
        name: name,
      },
      {
        where: {
          id: id,
          userId: userId,
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
  } catch (error) {
    return res.status(400).send({
      ok: false,
      msg: error,
    });
  }
};

const deleteCategory = async (req, res) => {
  const { id, userId } = req.body;
  try {
    const deleteCategory = await Category.update(
      {
        status: "inactive",
      },
      {
        where: {
          id: id,
          userId: null,
        },
      }
    );
    if (deleteCategory) {
      return res.status(200).send({
        ok: true,
        deleteCategory: "The category has been removed!",
      });
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
