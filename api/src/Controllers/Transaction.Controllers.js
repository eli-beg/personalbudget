const express = require("express");
const { Transaction } = require("../db");
const { Category } = require("../db");
const { SECRET } = process.env;
const jwt = require("jsonwebtoken");
const { verifyUser } = require("../utils/verifyUser");

const createTransaction = async (req, res) => {
  const { type, concept, amount, date, categoryId } = req.body;

  try {
    const authorization = req.get("Authorization");

    const aprobedUser = await verifyUser(authorization);

    if (aprobedUser) {
      const newTransaction = await Transaction.create({
        type: type,
        concept: concept,
        amount: amount,
        date: date,
        status: "active",
        userId: aprobedUser.id,
      });

      if (newTransaction) {
        categoryId && (await newTransaction.setCategory(categoryId));

        return res.status(200).send({
          ok: true,
          transaction: newTransaction,
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

const allTransactions = async (req, res) => {
  try {
    const authorization = req.get("Authorization");

    const aprobedUser = await verifyUser(authorization);

    if (aprobedUser) {
      const findTransactions = await Transaction.findAll({
        where: {
          status: "active",
          userId: aprobedUser.id,
        },
        raw: true,
      });

      if (findTransactions) {
        const incomes = findTransactions.filter((t) => t.type === "income");
        const expenses = findTransactions.filter((t) => t.type === "expense");

        const incomesAmounts = incomes.map((i) => parseInt(i.amount));
        const expensesAmounts = expenses.map((e) => parseInt(e.amount));

        const sumOfIncomes = incomesAmounts.reduce((a, b) => a + b, 0);
        const sumOfExpenses = expensesAmounts.reduce((a, b) => a + b, 0);

        const finalBalance = sumOfIncomes - sumOfExpenses;

        return res.status(200).send({
          ok: true,
          sumOfIncomes: sumOfIncomes,
          sumOfExpenses: sumOfExpenses,
          finalBalance: finalBalance,
          incomes: incomes,
          expenses: expenses,
          allTransactions: findTransactions,
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

const updateTransaction = async (req, res) => {
  const { id, concept, amount, date, categoryId } = req.body;

  try {
    const authorization = req.get("Authorization");

    const aprobedUser = await verifyUser(authorization);

    if (aprobedUser) {
      const updatedTransaction = await Transaction.update(
        {
          concept: concept,
          amount: amount,
          date: date,
          categoryId: categoryId,
        },
        {
          where: {
            id: id,
            userId: aprobedUser.id,
          },
        }
      );

      if (updatedTransaction) {
        return res.status(200).send({
          ok: true,
          updateTransaction: updatedTransaction,
        });
      }
    }
  } catch (error) {
    console.log(error);

    return res.status(400).send({
      ok: false,
      msg: error,
    });
  }
};

const deleteTransaction = async (req, res) => {
  const { id } = req.body;
  try {
    const authorization = req.get("Authorization");

    const aprobedUser = await verifyUser(authorization);

    if (aprobedUser) {
      const deleteTransaction = await Transaction.update(
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
      if (deleteTransaction) {
        return res.status(200).send({
          ok: true,
          deleteTransaction: "Transaction has been removed!",
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

const getNumberOfTransactionsByCategory = async (req, res) => {
  try {
    const authorization = req.get("Authorization");

    const aprobedUser = await verifyUser(authorization);
    if (aprobedUser) {
      const allCategories = await Category.findAll({
        where: {
          status: "active",
          userId: aprobedUser.id,
        },
        raw: true,
      });

      if (allCategories) {
        const transactionsCounterByCategory = await Promise.all(
          allCategories.map(async (category) => {
            const { count } = await Transaction.findAndCountAll({
              where: {
                status: "active",
                categoryId: category.id,
              },
            });
            return { ...category, count: count };
          })
        );

        return res.status(200).send({
          ok: true,
          allCategories: allCategories,
          transactionsCounterByCategory: transactionsCounterByCategory,
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
  createTransaction,
  allTransactions,
  updateTransaction,
  deleteTransaction,
  getNumberOfTransactionsByCategory,
};
