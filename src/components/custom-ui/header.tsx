import React from "react";
import Typography from "./typography";

type HeaderProps = {
  text: string;
  children?: React.ReactNode;
};

const Header = ({ text, children }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-6 lg:gap-12">
      <Typography
        variant="h3"
        tag="h3"
        fontWeight="bold"
        className="hidden max-w-[50rem] px-8 text-center lg:block"
      >
        {text}
      </Typography>
      <Typography
        variant="h4"
        tag="h4"
        fontWeight="bold"
        className="max-w-[50rem] px-4 text-center lg:hidden"
      >
        {text}
      </Typography>
      {children}
    </div>
  );
};

export default Header;
