import { useQuery } from "@tanstack/react-query";
import { fetchHistoryApi } from "../services/historyApi";

export const useGetAllHistories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["histories"],
    queryFn: fetchHistoryApi,
  });
  return {
    histories: data?.data,
    isLoading,
  };
};
