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
import Result from "postcss/lib/result";

const Calculator = () => {
  const { handleHistoryModal, setHistories } = useContext(AuthConext);
  const [input, setInput] = useState("");
  console.log(input, "input");
  const [calculatorOn, setCalculatorOn] = useState(true);
  const [isShifted, setIsShifted] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const storedUserDetails = localStorage.getItem("usersDetals");
  const details = JSON.parse(storedUserDetails);
  const Navigate = useNavigate();
  const [result, setResult] = useState("");
  useEffect(() => {
    if (details === null || details === undefined) {
      return Navigate("/");
    }
  }, [details, Navigate]);

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

  // const handleOpen = () => setOpen((cur) => !cur);
  return (
    <section className="grid md:grid-cols-2 gap-5 container mx-auto grid-cols-1 h-screen md:py-6">
      <div className="  bg-gray-200 w-{70%] border-2 border-black p-3 rounded-lg shadow-lg">
        <div>
          {/* Input area */}
          <div className="py-3">
            <input
              type="text"
              value={input === "" && result !== "" ? result : input}
              readOnly
              className="w-full"
            />
            {/* History icon and text */}
            <Button
              className="flex gap-1 items-center bg-[#ff9] text-black"
              onClick={handleHistoryModal}
            >
              <MdHistory />
              view history
            </Button>
          </div>
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
        <div className="flex gap-3 ">
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
            <FaEquals className=" ml-40" />
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
          />
        </div>
      </div>
      <div className="rounded-lg shadow-lg">
        <h5 className="text-center shadow font-bold text-3xl p-5 bg-[#ff9]">
          {" "}
          User Details
        </h5>
        <div className="">
          <div className="px-10 uppercase py-8 text-lg">
            <p className="">NAME : {details?.name}</p>
            <p> USER EMAIL: {details?.email}</p>
            <p> DEPARTMENT: {details?.matricNumber}</p>
            <p> LEVEL : {details?.yearLevel}</p>
            <p> DEPARTMENT : {details?.department}</p>
          </div>
          <div>
            <h5 className="text-center  py-3 shadow rounded-sm font-bold text-3xl bg-[#ff9]">
              Instruction About The Calcalator
            </h5>

            <div className="p-5">
              <p className=" font-bold text-2xl">
                Using a scientific calculator involves several steps to perform
                various mathematical operations. Here is a brief guide on how to
                use : <br /> 1. Basic Arithmetic 2.Trigonometric Functions
              </p>
              <div className="text-2xl font-normal">
                <h1 className="text-[orange] text-3xl"> Note:</h1>
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
      </div>
      <HistoryModal />
    </section>
  );
};

export default Calculator;
