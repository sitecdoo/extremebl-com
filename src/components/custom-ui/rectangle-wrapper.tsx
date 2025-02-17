import React from "react";
import Typography from "./typography";
import { Button } from "../ui/button";
import Link from "next/link";

type RectangleWrapperProps = {
  text: string;
  href: string;
  buttonText: string;
};

const RectangleWrapper = ({
  text,
  href,
  buttonText,
}: RectangleWrapperProps) => {
  return (
    <div className="flex items-center justify-between rounded-md bg-neutrals-100 px-4 py-3">
      <Typography fontWeight="bold">{text}</Typography>
      <Link href={href}>
        <Button variant="black" size="small" className="w-fit">
          <Typography
            fontWeight="bold"
            variant="body-sm"
            className="lg:text-base"
          >
            {buttonText}
          </Typography>
        </Button>
      </Link>
    </div>
  );
};

export default RectangleWrapper;
