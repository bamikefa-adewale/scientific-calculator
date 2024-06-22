/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { CarouselWithContent } from "../component/CarouselWithContent";
import SignIn from "../component/home/SignIn";
import Register from "../component/home/Register";
import AuthConext from "../context/authContext";

const Home = () => {
  const { handleLoginModal, handleRegisterModal, auth, onCloseModal } =
    useContext(AuthConext);
  return (
    <main>
      <nav className="  px-6 py-6  rounded-md shadow-md	text-xl cursor-pointer">
        <ul className="flex items-center justify-between mx-auto max-w-screen-xl ">
          <div className="text-red-600">
            <img
              src="https://fedpoffaonline.edu.ng/images/demo/default/logo/logo2.png"
              alt="logo"
              width={200}
            />
          </div>
          <ul className="flex gap-3  ">
            <li className="text-center rounded-md text-white p-3 bg-deep-orange-800 hover:bg-gray-700">
              <button onClick={handleLoginModal}>Login</button>
            </li>
            <div className="text-center rounded-md text-white p-3 bg-deep-orange-800 hover:bg-gray-700	">
              <button onClick={handleRegisterModal}>Register</button>
            </div>
          </ul>
        </ul>
      </nav>

      <section className=" mx-auto max-w-screen-xl">
        <CarouselWithContent />
      </section>
      <SignIn />
      <Register />
    </main>
  );
};

export default Home;
