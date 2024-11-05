import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addHistoryApi } from "../services/historyApi";
import { toast } from "react-toastify";

export const useAddHistory = () => {
  // Access the client
  const queryClient = useQueryClient();
  const { isPending, mutate, error } = useMutation({
    mutationFn: addHistoryApi,
    onSuccess: (data) => {
      console.log(data);
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["histories"] });
      toast.success("Successful");
    },
    onError: (error) => {
      console.log(error);
      toast.error("History Failed: " + error.message);
    },
  });

  return {
    mutate,
    isPending,
  };
};
