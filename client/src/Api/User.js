import axios from "axios";
import { API_PATH } from "../Config";

const createApiUser = async (value) => {
  return await axios.post(`${API_PATH}/user/create-user`, value);
};

const loginApiUser = async (value) => {
  return await axios.post(`${API_PATH}/user/login-user`, value);
};

const deleteApiUser = async (value) => {
  return await axios.put(`${API_PATH}/user/delete-user`, value);
};

export { createApiUser, loginApiUser, deleteApiUser };
