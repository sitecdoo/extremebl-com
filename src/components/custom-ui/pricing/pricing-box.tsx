import React from "react";
import Typography from "../typography";

type PricingBoxProps = {
  name: string;
  price: string;
};

const PricingBox = ({ name, price }: PricingBoxProps) => {
  return (
    <div className="flex min-h-16 w-full items-center justify-between gap-x-4 rounded-lg bg-neutrals-100 p-4 lg:gap-x-10 lg:rounded-xl lg:px-6 lg:py-8">
      <Typography className="max-w-56 sm:max-w-full">{name}</Typography>
      <Typography
        fontWeight="bold"
        variant="h5"
        tag="h5"
        className="whitespace-nowrap"
      >
        {price}
      </Typography>
    </div>
  );
};

export default PricingBox;
