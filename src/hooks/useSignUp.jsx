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
      toast.success("User Register Successful");
      onCloseModal();
      localStorage?.setItem("auth-token", JSON.stringify(data?.jwt));
      navigate("/calculator");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    isPending,
    mutate,
  };
};
