import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/Auth";

export const useLogout = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("User Logout");
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
