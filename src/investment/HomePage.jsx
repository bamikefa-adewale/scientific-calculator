import Header from "./InvestmentTable/Header";
import { Result } from "./InvestmentTable/Result";
import { UserInput } from "./InvestmentTable/UserInput";
import { useState } from "react";
const IntialValue = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 5,
};
const HomePage = () => {
  const [userInput, setUerInput] = useState(IntialValue);

  const handleChange = (inputIdentifier, newValue) => {
    setUerInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: +newValue,
      };
    });
  };
  return (
    <>
      <div className="items-center my-10 mx-[40%] shadow-lg">
        <Header />
        <UserInput input={userInput} onChange={handleChange} />
      </div>
      <div className="items-center my-10 mx-[40%]  shadow-lg">
        <Result resultInput={userInput} />
      </div>
    </>
  );
};

export default HomePage;
