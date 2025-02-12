"use client";

import { Button } from "../ui/button";
import Typography from "./typography";

type ScrollToButtonProps = {
  elementId: string;
  text: string;
  variant?: "black" | "yellow";
};

const ScrollToButton = ({ elementId, text, variant }: ScrollToButtonProps) => {
  const handleClick = () => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button variant={variant} className="w-fit" onClick={handleClick}>
      <Typography fontWeight="bold">{text}</Typography>
    </Button>
  );
};

export default ScrollToButton;
