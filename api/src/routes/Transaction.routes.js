const express = require("express");
const {
  createTransaction,
  allTransactions,
  updateExpenseTransaction,
  deleteTransaction,
} = require("../Controllers/Transaction.Controllers.js");

const transactionRoutes = express.Router();

transactionRoutes.post("/create-transaction", createTransaction);

transactionRoutes.get("/all-transactions", allTransactions);

transactionRoutes.put("/update-expense", updateExpenseTransaction);

transactionRoutes.delete("/delete-transaction", deleteTransaction);

module.exports = transactionRoutes;
