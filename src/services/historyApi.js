import { axiosInstance } from "./axiosInstance";

export const addHistoryApi = async (values) => {
  const res = await axiosInstance.post("/histories", values);
  return res.data;
};
export const fetchHistoryApi = async () => {
  const res = await axiosInstance.get("/histories");
  return res.data;
};
