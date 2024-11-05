import { useMutation } from "@tanstack/react-query";
import { logout } from "../services/signUp";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("User Logout");
      localStorage.clear();
      navigate("/"); // Navigate to calculator
    },
    onError: (error) => {
      console.log(error);
      toast.error("Logout Failed: " + error.message);
    },
  });
  return {
    logoutLoader: isPending,
    logoutMutate: mutate,
  };
};
