import { Dialog } from "@material-tailwind/react";
import { useContext } from "react";
import AuthConext from "../context/authContext";
import { useGetAllHistories } from "../hooks/useGetAllHistories";
import { useGetUser } from "../hooks/useGetUser";

export const HistoryModal = () => {
  const { auth, onCloseModal } = useContext(AuthConext);
  const { userData } = useGetUser();
  const { histories } = useGetAllHistories();
  const userHistories = histories?.filter(
    (history) => history?.attributes?.userId === userData?.id
  );
  console.log(userData);
  return (
    <Dialog
      size="xs"
      open={auth.historyModal}
      handler={onCloseModal}
      className=" h-[600px]  p-6  w-full  "
    >
      <h2 className="text-1xl py-3 font-bold flex justify-center uppercase text-deep-orange-800">
        Welcome to history
      </h2>
      <br />
      <h4 className="text-red-200"> {userData?.fullName}</h4>
      {userHistories?.map((history) => (
        <section key={history?.id}>
          <div className="font-semibold my-2 text-base flex gap-4 text-black ">
            <h2>{history?.attributes?.inputData}</h2>
            <p>{history?.attributes?.result}</p>
          </div>
          <small>{history?.attributes?.createdAt}</small>
        </section>
      ))}
    </Dialog>
  );
};
