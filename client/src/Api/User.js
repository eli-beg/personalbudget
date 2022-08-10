import axios from "axios";
import { API_PATH } from "../Config";

const createApiUser = async (value) => {
  return await axios.post(`${API_PATH}/user/create-user`, value);
};

const loginApiUser = async (value) => {
  console.log(axios);
  return await axios.post(`${API_PATH}/user/login-user`, value);
};

export { createApiUser, loginApiUser };
