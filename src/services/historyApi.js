import { Query } from "appwrite";
import { databases } from "../Appwrite/Appwrite";

export const addHistoryApi = async (values) => {
  const response = await databases.createDocument(
    "userId", // Your database ID
    "672a084b0023089398e9", // Your collection ID
    "unique()", // Document ID (you can use 'unique()' for auto-generation)
    values // Document data
  );

  return response;
};
export const fetchHistoryApi = async (userId) => {
  const response = await databases.listDocuments(
    "userId",
    "672a084b0023089398e9",
    [Query.equal("userId", userId)]
  );

  return response.documents;
};
