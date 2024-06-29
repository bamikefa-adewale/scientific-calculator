/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { CarouselWithContent } from "../component/CarouselWithContent";

import AuthConext from "../context/authContext";
import SignIn from "../component/home/SignIn";
import SignUp from "../component/home/SignUp";
import { Mobile } from "../component/Mobile";

const Home = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleLoginModal, handleRegisterModal } = useContext(AuthConext);
  return (
    <main>
      <nav className="  px-2 py-4 shadow-md	 ">
        <ul className="flex items-center justify-between mx-auto  container ">
          <div className="flex items-center ">
            <img
              src="https://fedpoffaonline.edu.ng/images/demo/default/logo/logo2.png"
              alt="logo"
              className="md:h-12 h-10 "
            />
          </div>
          <ul className="hidden md:flex gap-3">
            <li className="text-white bg-deep-orange-800 hover:bg-gray-700 rounded-md px-4 py-2">
              <button onClick={handleRegisterModal}>Register</button>
            </li>
            <li className=" text-white py-2 px-4 bg-deep-orange-800 hover:bg-gray-700	rounded-md">
              <button onClick={handleLoginModal}>Login</button>
            </li>
          </ul>
          <div className="md:hidden">
            <Mobile />
          </div>
        </ul>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-end gap-3 mt-4 shadow-sm">
              <li>
                <button className="text-white bg-deep-orange-800 hover:bg-gray-700 rounded-md px-4 py-2 w-full">
                  Login
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <section className=" w-full container mx-auto ">
        <CarouselWithContent />
      </section>
      <SignIn />
      <SignUp />
    </main>
  );
};

export default Home;
