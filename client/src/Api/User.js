import axios from "axios";
import { API_PATH } from "../Config";

const createApiUser = async (value) => {
  return await axios.post(`${API_PATH}/user/create-user`, value);
};

export { createApiUser };
