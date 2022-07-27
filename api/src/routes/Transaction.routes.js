const express = require("express");
const {
  createTransaction,
  allTransactions,
  updateTransaction,
  deleteTransaction,
  getNumberOfTransactionsByCategory,
} = require("../Controllers/Transaction.Controllers.js");

const transactionRoutes = express.Router();

transactionRoutes.post("/create-transaction", createTransaction);

transactionRoutes.get("/all-transactions", allTransactions);

transactionRoutes.put("/update-transaction", updateTransaction);

transactionRoutes.put("/delete-transaction", deleteTransaction);

transactionRoutes.get(
  "/get-number-of-transactions-by-category",
  getNumberOfTransactionsByCategory
);

module.exports = transactionRoutes;
