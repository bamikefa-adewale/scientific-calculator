import { axiosInstance } from "./axiosInstance";

export const signUpApi = async (values) => {
  const res = await axiosInstance.post("/auth/local/register", values);
  return res.data;
};
export const signInApi = async (values) => {
  const res = await axiosInstance.post("/auth/local", values);
  return res.data;
};
