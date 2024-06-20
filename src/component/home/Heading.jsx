/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";

export const Heading = ({ text, description }) => {
  return (
    <div>
      <Typography variant="h4" className="text-[#ff6600]">
        {text}
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        {description}
      </Typography>
    </div>
  );
};
