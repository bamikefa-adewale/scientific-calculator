/* eslint-disable no-undef */
import {
  calculateInvestmentResults,
  formatter,
} from "../../utilitis/Investment";

/* eslint-disable react/prop-types */
export const Result = ({ resultInput }) => {
  const resultData = calculateInvestmentResults(resultInput);
  // const initialInvestment =
  //   resultData[0].valueEndOfYear -
  //   resultData[0].interest -
  //   resultData[0].annualInvestment;

  //

  console.log(resultData);
  const calculateTotalInterest = (data) => {
    const initialInvestment =
      data.valueEndOfYear - data.interest - data.annualInvestment;
    const totalInterest =
      data.valueEndOfYear -
      data.annualInvestment * data.year -
      initialInvestment;
    const total = data.valueEndOfYear - totalInterest;
    return formatter.format(total.toFixed(2));
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-red-500">
        <tr className="flex justify-around">
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
            Year
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
            Investment Value
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
            Total Interest
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
            Investment Capital
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {resultData.map((data) => (
          <tr key={data.year} className="flex justify-around">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {data.year}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {formatter.format(data.interest.toFixed(2))}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {calculateTotalInterest(data)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
