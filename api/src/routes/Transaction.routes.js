const express = require("express");
const {
  createTransaction,
  allTransactions,
  updateTransaction,
  deleteTransaction,
} = require("../Controllers/Transaction.Controllers.js");

const transactionRoutes = express.Router();

transactionRoutes.post("/create-transaction", createTransaction);

transactionRoutes.get("/all-transactions", allTransactions);

transactionRoutes.put("/update-transaction", updateTransaction);

transactionRoutes.put("/delete-transaction", deleteTransaction);

module.exports = transactionRoutes;
