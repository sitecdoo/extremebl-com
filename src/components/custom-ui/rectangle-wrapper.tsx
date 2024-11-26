import React from "react";
import Typography from "./typography";
import { Button } from "../ui/button";

const RectangleWrapper = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-between rounded-md bg-neutrals-100 px-4 py-3">
      <Typography fontWeight="bold">{text}</Typography>
      <Button variant="black" size="small" className="w-fit">
        <Typography
          fontWeight="bold"
          variant="body-sm"
          className="lg:text-base"
        >
          Prijavi se
        </Typography>
      </Button>
    </div>
  );
};

export default RectangleWrapper;
