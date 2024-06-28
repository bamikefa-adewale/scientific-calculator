/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { CarouselWithContent } from "../component/CarouselWithContent";
import SignIn from "../component/home/SignIn";
import Register from "../component/home/Register";
import AuthConext from "../context/authContext";

const Home = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleLoginModal, handleRegisterModal, auth, onCloseModal } =
    useContext(AuthConext);
  return (
    <main>
      <nav className="  px-6 py-6 shadow-md	">
        <ul className="flex items-center justify-between mx-auto max-w-screen-xl ">
          <div className="flex items-center ">
            <img
              src="https://fedpoffaonline.edu.ng/images/demo/default/logo/logo2.png"
              alt="logo"
              className="md:h-20 h-10 w-auto"
            />
          </div>
          <ul className="hidden md:flex gap-3">
            <li className="text-white bg-deep-orange-800 hover:bg-gray-700 rounded-md px-4 py-4">
              <button onClick={handleLoginModal}>Register</button>
            </li>
            {/* <div className=" text-white py-4 px-4 bg-deep-orange-800 hover:bg-gray-700	rounded-md">
              <button onClick={handleRegisterModal}>Login</button>
            </div> */}
          </ul>
          <div className="md:hidden">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
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
          </div>
        </ul>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-end gap-3 mt-4 shadow-sm">
              <li>
                <button
                  onClick={handleLoginModal}
                  className="text-white bg-deep-orange-800 hover:bg-gray-700 rounded-md px-4 py-2 w-full"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        )}
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
