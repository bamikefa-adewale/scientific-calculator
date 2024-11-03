import axios from "axios";

const envStatus = import.meta.env;
export const axiosInstance = axios.create({
  // baseURL: "",
  baseURL:
    envStatus.MODE === "development"
      ? "http://localhost:1337/api"
      : "https://scientific-calculator-api.onrender.com/api",
});
