import { Dialog } from "@material-tailwind/react";
import { useContext } from "react";
import AuthConext from "../context/authContext";
import { useGetAllHistories } from "../hooks/useGetAllHistories";

import { useGetCurrentUser } from "../hooks/useGetCurrentUser";
import dayjs from "dayjs";

export const HistoryModal = () => {
  const { auth, onCloseModal } = useContext(AuthConext);
  const { user } = useGetCurrentUser();
  const { histories, status } = useGetAllHistories();

  return (
    <Dialog
      size="xs"
      open={auth.historyModal}
      handler={onCloseModal}
      className=" h-[600px]  p-6  w-full"
    >
      <h2 className="text-1xl py-3 font-bold flex justify-center uppercase text-deep-orange-800">
        Welcome to history
      </h2>
      <br />
      <h4 className="text-red-200"> {user?.fullName}</h4>
      {!histories && status === "pending" && <p>Loading...</p>}
      {histories &&
        histories?.length > 0 &&
        status === "success" &&
        histories?.map((history) => (
          <section key={history?.id} className="">
            <div className="font-semibold my-2 text-base flex gap-4 text-black ">
              <h2>{history?.inputData}</h2>
              <p> = {history?.result}</p>
            </div>
            <h2>
              {dayjs(history?.$createdAt).format("dddd, MMMM D, YYYY h:mm A")}
            </h2>
          </section>
        ))}

      {histories?.length === 0 && status === "success" && (
        <div>
          <p>No History Found</p>
        </div>
      )}
    </Dialog>
  );
};
