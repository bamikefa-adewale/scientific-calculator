import { useQuery } from "@tanstack/react-query";
import { fetchHistoryApi } from "../services/historyApi";
import { useGetCurrentUser } from "./useGetCurrentUser";

export const useGetAllHistories = () => {
  const { user } = useGetCurrentUser();
  const { data, status, error } = useQuery({
    queryKey: ["histories"],
    queryFn: async () => {
      const res = await fetchHistoryApi(user?.userId);
      return res;
    },
  });
  const histories = data?.sort(
    (a, b) => new Date(b?.$createdAt) - new Date(a?.$createdAt)
  );

  return {
    histories,
    status,
  };
};
