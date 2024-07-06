import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://scientific-calculator-api.onrender.com/api",
});
