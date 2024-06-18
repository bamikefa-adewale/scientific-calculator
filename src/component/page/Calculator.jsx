/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CustomButton from "../CustomButton";
import FunctionPad from "../FunctionPad";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [calculatorOn, setCalculatorOn] = useState(true);
  const [isShifted, setIsShifted] = useState(false);

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

  return (
    <div>
      {calculatorOn && (
        <div className="calculator">
          <input type="text" value={input} readOnly />
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
    </div>
  );
};

export default Calculator;
