import axios from "axios";
import { API_PATH } from "../Config";

const getCategories = async () => {
  return await axios.get(`${API_PATH}/category/get-categories`);
};

const createApiCategory = async (value) => {
  return await axios.post(`${API_PATH}/category/create-category`, value);
};

export { getCategories, createApiCategory };
