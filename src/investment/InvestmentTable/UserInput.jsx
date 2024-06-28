/* eslint-disable react/prop-types */
import { Input } from "@material-tailwind/react";

export const UserInput = ({ input, onChange }) => {
  return (
    <div>
      <div className="p-4 ">
        {" "}
        <label htmlFor="">Initial Investment</label>
        <Input
          type="number"
          required
          value={input.initialInvestment}
          onChange={(e) => onChange("inputIdentifier", e.target.value)}
        />
        <label htmlFor="">Annual Investment</label>
        <Input
          type="number"
          required
          value={input.annualInvestment}
          onChange={(e) => onChange("inputIdentifier", e.target.value)}
        />
        <label htmlFor="">Expected Return</label>
        <Input
          type="number"
          required
          value={input.expectedReturn}
          onChange={(e) => onChange("inputIdentifier", e.target.value)}
        />
        <label htmlFor="">Duration</label>
        <Input
          type="number"
          required
          value={input.duration}
          onChange={(e) => onChange("inputIdentifier", e.target.value)}
        />
      </div>
    </div>
  );
};
