/* eslint-disable no-unused-vars */
import React from "react";
import { CarouselWithContent } from "../CarouselWithContent";
import SignIn from "./SignIn";
import Register from "./Register";
import { Button } from "flowbite-react";

const Home = () => {
  return (
    <>
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
              <SignIn />
            </li>
            <div className="text-center rounded-md text-white p-3 bg-deep-orange-800 hover:bg-gray-700	">
              <Register />
            </div>
          </ul>
        </ul>
      </nav>

      <section className=" mx-auto max-w-screen-xl">
        <CarouselWithContent />
      </section>
    </>
  );
};

export default Home;
