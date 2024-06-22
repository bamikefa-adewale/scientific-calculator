import { Dialog } from "@material-tailwind/react";
import { useContext } from "react";
import AuthConext from "../context/authContext";

export const HistoryModal = () => {
  const { auth, onCloseModal, histories } = useContext(AuthConext);
  console.log(histories);
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
      {histories?.map((history, i) => (
        <div
          className="font-semibold my-4 text-base flex gap-4 text-black "
          key={i}
        >
          <h2>{history.inputData}</h2>
          <p>{history?.result}</p>
        </div>
      ))}
    </Dialog>
  );
};
