/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import "./CustomButton.css";

const CustomButton = ({
  handleClick,
  handleShiftClick,
  isShifted,
  addOpeningParenthesis,
  addClosingParenthesis,
}) => {
  return (
    <div className="number-pad">
      <button onClick={handleShiftClick}>
        {isShifted ? "Alpha" : "Shift"}
      </button>

      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("+")}>+</button>
      <button onClick={() => handleClick("3")}>3</button>
      <button onClick={() => handleClick("4")}>4</button>
      <button onClick={() => handleClick("/")}>/</button>
      <button onClick={() => handleClick("5")}>5</button>
      <button onClick={() => handleClick("6")}>6</button>
      <button onClick={() => handleClick("X")}>X</button>
      <button onClick={() => handleClick("7")}>7</button>
      <button onClick={() => handleClick("8")}>8</button>
      <button onClick={() => handleClick("-")}>-</button>
      <button onClick={() => handleClick("9")}>9</button>
      <button onClick={() => handleClick("0")}>0</button>
      <button onClick={() => handleClick(".")}>DOT(.)</button>
      <button onClick={addOpeningParenthesis}>(</button>
      <button onClick={addClosingParenthesis}>)</button>
    </div>
  );
};

export default CustomButton;
