import Axios from "axios";
import config from "./config";

const Axioser = Axios.create({
  baseURL: config.URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

const setAuthorization = (token: string) => {
  if (!token) throw new Error(`invalid token:${token}`);

  Axioser.defaults.headers.common["Authorization"] = `JWT ${token}`;
};

Axioser.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
Axioser.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { Axioser, setAuthorization };
