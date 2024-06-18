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
}) => {
  return (
    <div className="function-pad">
      <button onClick={calculateLog}>log</button>
      <button onClick={calculateSin}>sin</button>
      <button onClick={calculateCos}>cos</button>
      <button onClick={calculateTan}>tan</button>
      <button onClick={calculateFactorial}>X!</button>
      <button onClick={calculateSquareRoot}>√</button>
      <button onClick={calculatePercentage}>%</button>
    </div>
  );
};

export default FunctionPad;
