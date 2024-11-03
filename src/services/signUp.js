import { axiosInstance } from "./axiosInstance";

export const signUpApi = async (values) => {
  const res = await axiosInstance.post("/auth/local/register", values);
  return res.data;
};
export const signInApi = async (values) => {
  const payload = {
    password: values.password,
    identifier: values.email,
  };
  const res = await axiosInstance.post("auth/local", payload);
  return res.data;
};

// import { supabase } from "../supabase/supabase";

// export const signUpApi = async (values) => {
//   const { email, password, username } = values; // Destructure to get email and password
//   const { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       data: { username }, // Optionally save additional user data
//     },
//   });

//   if (error) console.error("Error fetching user:", error.message);
//   return data;
// };

// export const signInApi = async (email, password) => {
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) {
//     throw new Error(error.message);
//   }

//   return data;
// };
