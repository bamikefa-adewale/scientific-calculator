import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthConext from "../context/authContext";
import { useAuthStore } from "../store/Auth";

export const useSignUp = () => {
  const { onCloseModal } = useContext(AuthConext);
  const { createAccount, login } = useAuthStore();
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: async (data) => {
      const response = await createAccount(data);
      if (response?.success) {
        const res = await login(data);
        return res;
      }
      if (response?.error && response?.success === false) {
        throw new Error(response?.error?.message);
      }
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success("User Registration Successful");
        onCloseModal();
        navigate("/calculator"); // Navigate to calculator
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return {
    isPending,
    mutate,
  };
};
