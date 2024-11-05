import { useQuery } from "@tanstack/react-query";
import React from "react";
import { account, databases } from "../Appwrite/Appwrite";
import { Query } from "appwrite";

export const useGetCurrentUser = () => {
  const { data, isError, status } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const data = await account.get();
      if (data.$id) {
        const response = await databases.listDocuments(
          "userId",
          "6729bac5000072a5128a",
          [Query.equal("userId", data?.$id)]
        );

        return response.documents[0];
      }
    },
  });

  return {
    user: data,
    status,
    isError,
  };
};
