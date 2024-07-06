/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./FunctionPad.css";

const FunctionPad = ({
  calculateLog,
  calculateSin,
  calculateCos,
  calculateTan,
  calculateFactorial,
  calculateSquareRoot,
  calculatePercentage,
  CalculatePower,
}) => {
  return (
    <div className="function-pad">
      <button onClick={calculateLog}>Log</button>
      <button onClick={calculateSin}>Sin</button>
      <button onClick={calculateCos}>Cos</button>
      <button onClick={calculateTan}>Tan</button>
      <button onClick={calculateFactorial}>X!</button>
      <button onClick={calculateSquareRoot}>√</button>
      <button onClick={calculatePercentage}>%</button>
      <button onClick={CalculatePower}>X^</button>
    </div>
  );
};

export default FunctionPad;
