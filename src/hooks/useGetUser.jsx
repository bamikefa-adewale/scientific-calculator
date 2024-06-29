import { useQuery } from "@tanstack/react-query";
import { userApi } from "../services/userAPi";

export const useGetUser = () => {
  const { data, isLoading } = useQuery({
    queryFn: userApi,
    queryKey: ["current-user"],
  });

  console.log(data);
  return {
    userData: data,
    isLoading,
  };
};
