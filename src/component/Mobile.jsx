import React, { useContext } from "react";
import { Drawer } from "@material-tailwind/react";
import AuthConext from "../context/authContext";

export function Mobile() {
  const [open, setOpen] = React.useState(false);
  const { handleLoginModal, handleRegisterModal } = useContext(AuthConext);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <button onClick={openDrawer} className=" cursor-pointer">
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4 h-[300px]"
        placement="right"
      >
        <div className="grid gap-4 py-4">
          <button
            className="text-white bg-deep-orange-800 hover:bg-gray-700 rounded-md px-4 py-2 cursor-pointer"
            onClick={() => {
              handleRegisterModal();
              closeDrawer();
            }}
          >
            Register
          </button>
          <button
            className=" text-white py-2 px-4 bg-deep-orange-800 hover:bg-gray-700 cursor-pointer	rounded-md"
            onClick={() => {
              handleLoginModal();
              closeDrawer();
            }}
          >
            Login
          </button>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
