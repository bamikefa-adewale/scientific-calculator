// import { supabase } from "../../supabaseClient";

// export const userApi = async () => {
//   const token = localStorage.getItem("auth-token");
//   if (!token) return "No token found";

//   const { data, error } = await supabase.auth.getUser();

//   if (error) {
//     console.error("Error fetching user:", error);
//     return null; // Handle error as needed
//   }

//   return data.user; // Or return the whole data if needed
// };

import { axiosInstance } from "./axiosInstance";

export const userApi = async () => {
  const token = localStorage.getItem("auth-token");
  if (JSON.parse(token) === null || JSON.parse(token) === "")
    return "No token found";
  const res = await axiosInstance.get("/users/me", {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  });
  return res.data;
};
