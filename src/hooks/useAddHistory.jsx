import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addHistoryApi } from "../services/historyApi";
import { toast } from "react-toastify";

export const useAddHistory = () => {
  // Access the client
  const queryClient = useQueryClient();
  const { isPending, mutate, error } = useMutation({
    mutationFn: addHistoryApi,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["histories"] });
      toast.success("Successful");
    },
  });
  console.log(error);
  return {
    mutate,
    isPending,
  };
};
