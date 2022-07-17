import axios from "axios";

const requestApi = axios.create({
  // baseURL: process.env.REACT_PUBLIC_API_URL,
  baseURL: `https://reqres.in/api`,
});
requestApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  console.log("interceptor is working");

  if (config.headers !== undefined) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default requestApi;
