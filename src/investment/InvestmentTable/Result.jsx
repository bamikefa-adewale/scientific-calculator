/* eslint-disable no-undef */
import {
  calculateInvestmentResults,
  formatter,
} from "../../utilitis/Investment";

/* eslint-disable react/prop-types */
export const Result = ({ resultInput }) => {
  const annualData = [];
  const resultData = calculateInvestmentResults(resultInput, annualData);

  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  const totalData =
    resultData.valueEndOfYear -
    resultData.annualInvestment * resultData.year -
    initialInvestment;
  return (
    // <table className="">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-red-500">
        {/* <thead className="bg-red-500"> */}
        {/* <tr className=""> */}
        <tr className="flex">
          {/* <th className=""> */}
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
            Year
          </th>
          <th className="">
            Investment <br />
            Value
          </th>
          <th className="">
            {" "}
            Interest <br />
            (Year)
          </th>
          <th className="">
            {" "}
            Total <br />
            Interest
          </th>
          <th className="">
            Investment <br /> Capital
          </th>
        </tr>
      </thead>
      <tbody className="">
        {resultData.map((data) => (
          <tr key={data.year} className="flex">
            {/* <td className=""> */}
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {data.year}
            </td>
            <tr className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {formatter.format(data.valueEndOfYear)}
            </tr>
            <tr className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {formatter.format(data.interest)}
            </tr>
            <tr className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {formatter.format(totalData)}
            </tr>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
