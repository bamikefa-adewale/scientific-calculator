import { useQuery } from "@tanstack/react-query";
import { fetchHistoryApi } from "../services/historyApi";

export const useGetAllHistories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["histories"],
    queryFn: fetchHistoryApi,
  });
  console.log(data?.data);
  return {
    histories: data?.data,
    isLoading,
  };
};
