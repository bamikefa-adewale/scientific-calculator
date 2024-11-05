import { useMutation } from "@tanstack/react-query";
import { signInApi } from "../services/signUp";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthConext from "../context/authContext";

export const useLogin = () => {
  const { onCloseModal } = useContext(AuthConext);
  const navigate = useNavigate();
  const { isPending, mutate, error, isError } = useMutation({
    mutationFn: signInApi,
    onSuccess: (data) => {
      if (data?.$id) {
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("User Login Successful");
        onCloseModal();
        navigate("/calculator");
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    isPending,
    mutate,
    isError,
    error,
  };
};
