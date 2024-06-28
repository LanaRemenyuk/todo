import axios from "axios";
import config from "@config/config.json";

const httpAuth = axios.create({
  baseURL: config.apiEndpoint + "auth/",
  params: {}
});

const authService = {
  login: async ({ login, password }) => {
    const { data } = await httpAuth.post(`signInWithPassword`, {
      login,
      password
    });
    return data;
  }
};

export default authService;
