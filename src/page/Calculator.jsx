/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React, { useContext, useEffect, useState } from "react";
import CustomButton from "../component/CustomButton";
import FunctionPad from "../component/FunctionPad";
import { MdHistory } from "react-icons/md";

import { Button } from "@material-tailwind/react";
import { FaEquals } from "react-icons/fa";
import AuthConext from "../context/authContext";
import { HistoryModal } from "../component/HistoryModal";

import { useAddHistory } from "../hooks/useAddHistory";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";
import { useLogout } from "../hooks/useLogout";

const Calculator = () => {
  const { mutate, isPending } = useAddHistory();
  const { handleHistoryModal, auth, setHistories } = useContext(AuthConext);
  const [result, setResult] = useState("");
  const [isShifted, setIsShifted] = useState(false);
  const [input, setInput] = useState("");

  const handleShiftClick = () => {
    setIsShifted(!isShifted);
  };

  const handleClick = (value) => {
    if (isShifted && value !== "Shift") {
      setInput(input + value.toUpperCase());
      setIsShifted(false);
    } else {
      // Append "π" when clicked
      if (value === "π") {
        setInput(input + "π");
      } else {
        setInput(input + value);
      }
    }
  };

  const handleResult = () => {
    try {
      // Replace "π" with Math.PI before evaluation
      const expression = input.replace(/π/g, Math.PI);
      const result = eval(expression);

      const data = {
        inputData: input,
        result: String(result),
        userId: user?.userId,
      };
      setResult(result);

      mutate(data);

      setInput("");
    } catch (error) {
      setInput("");
    }
  };

  const clear = () => {
    setInput("");
    setResult("");
  };

  const calculateLog = () => {
    setInput(Math.log10(input).toString());
  };

  const calculateSin = () => {
    setInput(Math.sin(input).toString());
  };

  const calculateCos = () => {
    setInput(Math.cos(input).toString());
  };

  const calculateTan = () => {
    setInput(Math.tan(input).toString());
  };

  const calculateSquareRoot = () => {
    const inputValue = parseFloat(input);
    if (!isNaN(inputValue) && inputValue >= 0) {
      setInput(Math.sqrt(inputValue).toString());
    } else {
      setInput("Invalid Input");
    }
  };

  const calculatePercentage = () => {
    const inputValue = parseFloat(input);
    if (!isNaN(inputValue)) {
      // Divide the input value by 100 to get the percentage
      setInput((inputValue / 100).toString());
    } else {
      setInput("Invalid Input");
    }
  };

  const calculateFactorial = () => {
    const inputValue = parseInt(input, 10);
    if (isNaN(inputValue) || inputValue < 0) {
      setInput("Invalid Input");
    } else {
      setInput(factorial(inputValue).toString());
    }
  };

  const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const addOpeningParenthesis = () => {
    setInput(input + "(");
  };

  const addClosingParenthesis = () => {
    setInput(input + ")");
  };

  const CalculatePower = () => {
    const inputValue = parseFloat(input, "");
    if (!isNaN(inputValue) && !isNaN(inputValue)) {
      const result = Math.pow(inputValue, inputValue);
      setInput(result);
    }
  };

  const CalculatePi = () => {
    setInput(input + Math.PI.toString());
  };
  const { user, status } = useGetCurrentUser();
  const { logoutLoader, logoutMutate } = useLogout();
  return (
    <section className="">
      <Button onClick={logoutMutate} className=" m-3 py-4">
        {logoutLoader ? "Loading..." : " Sign out"}
      </Button>
      <div className="grid md:grid-cols-2 gap-10 p-4 md:py-6 py-4 container mx-auto grid-cols-1">
        <div className="  bg-gray-200 w-full md:[70%] border-2 border-black p-3 rounded-lg shadow-lg">
          {/* Input area */}
          <div className="py-3">
            <input
              type="text"
              value={input === "" && result !== "" ? result : input}
              readOnly
              className="w-full p-2 text-lg md:text-xl"
            />
            {/* History icon and text */}
            <Button
              className="flex gap-1 items-center bg-[#ff9] text-black mt-2"
              onClick={handleHistoryModal}
            >
              <MdHistory />
              view history
            </Button>
          </div>

          <CustomButton
            handleClick={handleClick}
            handleShiftClick={handleShiftClick}
            isShifted={isShifted}
            addOpeningParenthesis={addOpeningParenthesis}
            addClosingParenthesis={addClosingParenthesis}
          />
          <div className="flex gap-3 mt-4 ">
            <Button
              className="bg-[black] flex-initial w-64 text-white hover:bg-gray-300 active:bg-blue-200"
              onClick={clear}
            >
              Clear
            </Button>
            <Button
              className="bg-black flex-initial w-full p-4 text-white hover:bg-gray-300 active:bg-blue-200"
              onClick={handleResult}
            >
              <FaEquals className=" mx-auto" />
            </Button>
          </div>
          <div className="">
            <FunctionPad
              calculateLog={calculateLog}
              calculateSin={calculateSin}
              calculateCos={calculateCos}
              calculateTan={calculateTan}
              calculateFactorial={calculateFactorial}
              calculateSquareRoot={calculateSquareRoot}
              calculatePercentage={calculatePercentage}
              CalculatePower={CalculatePower}
              CalculatePi={CalculatePi}
            />
          </div>
        </div>

        <div className="rounded-lg shadow-lg">
          <h5 className="text-center shadow text-base font-bold p-3 text-[orange] bg-[#ff9]">
            User Details
          </h5>
          {!user && status === "pending" && (
            <h2 className="px-8 uppercase py-4 text-sm sm:px-10 ">
              Loading...
            </h2>
          )}
          {!user && status === "error" && <p>Something went wrong</p>}
          {user && status === "success" && (
            <div className="px-8 uppercase py-4 text-sm sm:px-10">
              <span className="text-[orange] flex ">
                NAME: <p className="text-black ml-2 "> {user?.fullName}</p>
              </span>
              <span className="text-[orange] flex ">
                USER EMAIL: <p className="text-black ml-2 "> {user?.email}</p>
              </span>
              <span className="text-[orange] flex ">
                MATRIC NUMBER:{" "}
                <p className="text-black ml-2 "> {user?.matricNumber}</p>
              </span>
              <span className="text-[orange] flex ">
                LEVEL: <p className="text-black ml-2 ">{user?.level}</p>
              </span>
              <span className="text-[orange] flex  ">
                DEPARTMENT:{" "}
                <p className="text-black ml-2 "> {user?.department}</p>
              </span>
            </div>
          )}
          <div>
            <p className="text-center shadow text-base font-bold  p-3 text-[orange] bg-[#ff9]">
              Instruction About The Calcalator
            </p>

            <div className="p-5">
              <p className="  text-base">
                Using a scientific calculator involves several steps to perform
                various mathematical operations. Here is a brief guide on how to
                use : <br /> 1. Basic Arithmetic <br /> 2.Trigonometric
                Functions
              </p>
              <div className="text-sm font-normal">
                <h1 className="text-[orange] text-3xl m-2"> Note:</h1>
                <p>
                  1 : Sine: Press the number button, press the sin button, and
                  then press "="
                </p>
                <p>
                  2 : Cosine: Press the number button, press the cos button, and
                  then press "="
                </p>
                <p>
                  3 : Tangent: Press the number button, press the tan button,
                  and then press "="
                </p>
              </div>
            </div>
          </div>
        </div>

        <HistoryModal />
      </div>
    </section>
  );
};

export default Calculator;
