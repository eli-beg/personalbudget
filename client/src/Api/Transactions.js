import axios from "axios";
import { API_PATH } from "../Config";

const allTransactions = async () => {
  return await axios.get(`${API_PATH}/transaction/all-transactions`);
};

const updateTransaction = async (value) => {
  return await axios.put(`${API_PATH}/transaction/update-transaction`, value);
};

const deleteTransaction = async (value) => {
  return await axios.put(`${API_PATH}/transaction/delete-transaction`, value);
};

export { allTransactions, updateTransaction, deleteTransaction };
