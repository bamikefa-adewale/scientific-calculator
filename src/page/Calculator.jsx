/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React, { useContext, useEffect, useState } from "react";
import CustomButton from "../component/CustomButton";
import FunctionPad from "../component/FunctionPad";
import { MdHistory } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { FaEquals } from "react-icons/fa";
import AuthConext from "../context/authContext";
import { HistoryModal } from "../component/HistoryModal";
import { useGetUser } from "../hooks/useGetUser";
import { useAddHistory } from "../hooks/useAddHistory";

const Calculator = () => {
  const { mutate, isPending } = useAddHistory();
  const { userData } = useGetUser();
  console.log(userData?.id);
  const { handleHistoryModal, auth, setHistories } = useContext(AuthConext);
  const [result, setResult] = useState("");
  const [isShifted, setIsShifted] = useState(false);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("auth-token");
    return navigate("/");
  };
  const handleClick = (value) => {
    if (isShifted && value !== "Shift") {
      setInput(input + value.toUpperCase());
      setIsShifted(false);
    } else {
      setInput(input + value);
    }
  };

  const handleShiftClick = () => {
    setIsShifted(!isShifted);
  };

  const handleResult = () => {
    try {
      const result = eval(input);

      setResult(result);

      const values = {
        data: {
          inputData: input,
          result: String(result),
          userId: userData?.id,
        },
      };
      mutate(values);
      setHistories((prev) => [
        ...prev,
        {
          inputData: input,
          result,
        },
      ]);

      setInput("");
    } catch (error) {
      setInput("Error");
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
  return (
    <section className="">
      <Button onClick={handleSignOut} className=" m-3 py-4">
        Sign out
      </Button>
      <div className="grid md:grid-cols-2 gap-10 p-4 md:py-6 py-4 container mx-auto grid-cols-1">
        {" "}
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
            calculate={handleResult}
            clear={clear}
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
            />
          </div>
        </div>
        <div className="rounded-lg shadow-lg">
          <h5 className="text-center shadow text-base font-bold p-3 text-[orange] bg-[#ff9]">
            User Details
          </h5>
          <div className="px-8 uppercase py-4 text-sm sm:px-10">
            <span className="text-[orange] flex ">
              NAME: <p className="text-black ml-2 "> {userData?.fullName}</p>
            </span>
            <span className="text-[orange] flex ">
              USER EMAIL: <p className="text-black ml-2 "> {userData?.email}</p>
            </span>
            <span className="text-[orange] flex ">
              MATRIC NUMBER:{" "}
              <p className="text-black ml-2 "> {userData?.matricNumber}</p>
            </span>
            <span className="text-[orange] flex ">
              LEVEL: <p className="text-black ml-2 ">{userData?.level}</p>
            </span>
            <span className="text-[orange] flex  ">
              DEPARTMENT:{" "}
              <p className="text-black ml-2 "> {userData?.department}</p>
            </span>
          </div>
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
