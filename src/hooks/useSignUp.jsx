import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "../services/signUp";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthConext from "../context/authContext";

export const useSignUp = () => {
  const { onCloseModal } = useContext(AuthConext);
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      console.log(data);
      // Check if the access_token is available
      if (data?.$id) {
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("User Registration Successful");
        onCloseModal();
        navigate("/calculator"); // Navigate to calculator
      }
    },
    onError: (error) => {
      console.log(error);
      toast.error("Registration failed: " + error.message);
    },
  });
  return {
    isPending,
    mutate,
  };
};
