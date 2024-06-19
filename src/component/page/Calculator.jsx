/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import FunctionPad from "../FunctionPad";
import { useLocation } from "react-router-dom";
import { MdHistory } from "react-icons/md";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [calculatorOn, setCalculatorOn] = useState(true);
  const [isShifted, setIsShifted] = useState(false);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

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

  const calculate = () => {
    try {
      const result = eval(input);
      setHistory([...history, { input, result }]);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
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

  const toggleCalculator = () => {
    setCalculatorOn(!calculatorOn);
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };
  const storedUserDetails = localStorage.getItem("usersDetals");

  const details = JSON.parse(storedUserDetails);
  return (
    <section className=" w-full flex justify-center">
      {/* <div>
        {details ? (
          <div className="rounded-lg shadow-lg p-5 w-full text-center text-white bg-blue-gray-200">
            <h3 className="text-base font-bold rounded-lg shadow-lg text-gray-200 p-3">
              USER DETAILS
            </h3>
            <h1>NAME: {details.name}</h1>
            <p>EMAIL: {details.email}</p>
            <p>MATRIC NUMBER: {details.matricNumber}</p>
            <p>DEPARTMENT: {details.department}</p>
          </div>
        ) : (
          <button type="button" className="bg-indigo-500 p-3 rounded-sm">
            <svg
              className="animate-spin bg-red-400 h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
            >
              ....
            </svg>
            Loading..
          </button>
        )}
      </div> */}
      {calculatorOn && (
        <div className="  bg-gray-200 border-2 border-black p-3 rounded-lg shadow-lg">
          <div>
            {details ? (
              <div className="rounded-lg shadow-lg py-5 mb-2 w-full text-center text-white bg-blue-gray-200">
                <h3 className="text-base font-bold rounded-lg shadow-lg text-gray-200 p-3">
                  USER DETAILS
                </h3>
                <h1>NAME: {details.name}</h1>
                <p>EMAIL: {details.email}</p>
                <p>MATRIC NUMBER: {details.matricNumber}</p>
                <p>DEPARTMENT: Computer Science</p>
              </div>
            ) : (
              <button type="button" className="bg-indigo-500 p-3 rounded-sm">
                <svg
                  className="animate-spin bg-red-400 h-5 w-5 mr-3 ..."
                  viewBox="0 0 24 24"
                >
                  ....
                </svg>
                Loading..
              </button>
            )}
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* History icon and text */}
            <div
              style={{
                position: "absolute",
                left: 0,
                zIndex: 1,
                padding: "10px",
              }}
            >
              <MdHistory
                style={{
                  cursor: "pointer",
                  transform: "translateY(-50%)",
                }}
                onClick={toggleHistory}
              />
            </div>
            {/* Input area */}

            {/* Input area */}
            <div style={{ paddingLeft: "50px", width: "100%" }}>
              {showHistory ? (
                <ul>
                  {history.map((entry, index) => (
                    <li key={index}>
                      {entry.input} = {entry.result}
                    </li>
                  ))}
                </ul>
              ) : (
                <input
                  type="text"
                  value={input}
                  readOnly
                  style={{ width: "100%" }}
                />
              )}
            </div>
          </div>

          <CustomButton
            handleClick={handleClick}
            handleShiftClick={handleShiftClick}
            calculate={calculate}
            clear={clear}
            isShifted={isShifted}
            addOpeningParenthesis={addOpeningParenthesis}
            addClosingParenthesis={addClosingParenthesis}
          />

          <div>
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
          <div className="functions"></div>
        </div>
      )}
      <button onClick={toggleCalculator}>{calculatorOn ? "Off" : "On"}</button>
    </section>
  );
};

export default Calculator;
