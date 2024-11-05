import { account, databases, ID } from "../Appwrite/Appwrite";

// SignUp API
export const signUpApi = async (values) => {
  const { email, password, fullName } = values;
  const data = await account.create(
    "unique()",
    email,
    password,
    (name = fullName)
  );

  if (data.$id) {
    const res = await databases.createDocument(
      "userId",
      "6729bac5000072a5128a",
      ID.unique(),
      {
        ...values,
        userId: data?.$id,
      }
    );
    return res;
  }
};

// Sign In
export const signInApi = async (values) => {
  const { email, password } = values;
  // const loggedInUser = await Database.get();
  return await account.createEmailPasswordSession(email, password);
};

export const logout = async () => {
  return await account.deleteSession("current");
};
