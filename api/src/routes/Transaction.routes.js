const express = require("express");
const {
  createTransaction,
  allTransactions,
  updateTransaction,
  deleteTransaction,
  getNumberOfTransactionsByCategory,
  lastTenTransactions,
} = require("../Controllers/Transaction.Controllers.js");
const { validateAuth } = require("../middleware/validateAuth.js");

const transactionRoutes = express.Router();

transactionRoutes.post("/create-transaction", validateAuth, createTransaction);

transactionRoutes.get("/all-transactions", validateAuth, allTransactions);

transactionRoutes.get(
  "/last-ten-transactions",
  validateAuth,
  lastTenTransactions
);

transactionRoutes.put("/update-transaction", validateAuth, updateTransaction);

transactionRoutes.put("/delete-transaction", validateAuth, deleteTransaction);

transactionRoutes.get(
  "/get-number-of-transactions-by-category",
  getNumberOfTransactionsByCategory
);

module.exports = transactionRoutes;
