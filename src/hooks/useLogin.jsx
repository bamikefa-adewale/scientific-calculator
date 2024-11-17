import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthConext from "../context/authContext";
import { useAuthStore } from "../store/Auth";

export const useLogin = () => {
  const { login } = useAuthStore();
  const { onCloseModal } = useContext(AuthConext);
  const navigate = useNavigate();
  const { isPending, mutate, error, isError } = useMutation({
    mutationFn: async (data) => {
      const response = await login(data);
      if (response?.error && response?.success === false) {
        console.log(response);
        throw new Error(response?.error?.message);
      }
      return response;
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success("User Login Successful");
        onCloseModal();
        navigate("/calculator");
      }
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
  return {
    isPending,
    mutate,
    isError,
    error,
  };
};
