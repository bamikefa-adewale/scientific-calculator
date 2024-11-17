import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { ID } from "appwrite";
import { account, databases } from "../Appwrite/Appwrite";

export const useAuthStore = create()(
  persist(
    immer((set) => ({
      session: null,
      user: null,
      jwt: null,
      hydrated: false,
      setHydrated: () =>
        set({
          hydrated: true,
        }),
      verifySession: async () => {
        try {
          const session = await account.getSession("current");
          set({
            session,
          });
        } catch (error) {
          console.log(error);
        }
      },
      login: async (payload) => {
        try {
          const session = await account.createEmailPasswordSession(
            payload.email,
            payload.password
          );
          const [user, { jwt }] = await Promise.all([
            account.get(),
            account.createJWT(),
          ]);
          set({
            session,
            user,
            jwt,
          });
          return { success: true, error: null };
        } catch (err) {
          return { success: false, error: err };
        }
      },
      createAccount: async (payload) => {
        try {
          const data = await account.create(
            ID.unique(),
            payload.email,
            payload.password,
            payload.name
          );

          if (data.$id) {
            await databases.createDocument(
              "userId",
              "6729bac5000072a5128a",
              ID.unique(),
              {
                ...payload,
                userId: data?.$id,
              }
            );
            return { success: true, error: null };
          }
        } catch (err) {
          return { success: false, error: err };
        }
      },
      logout: async () => {
        try {
          await account.deleteSessions();
          set({
            session: null,
            user: null,
            jwt: null,
          });
        } catch (error) {
          console.log(error);
        }
      },
    })),
    {
      name: "auth",
      onRehydrateStorage() {
        return (state, error) => {
          if (error) state?.setHydrated();
        };
      },
    }
  )
);
