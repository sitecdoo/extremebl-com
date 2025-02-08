import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Typography from "./typography";

const ArrowButton = () => {
  return (
    <Button
      variant="ghost"
      className="flex w-fit items-center gap-x-2 px-0 lg:px-0"
    >
      <Typography tag="span" fontWeight="bold">
        Pročitajte više
      </Typography>
      <ArrowRight className="size-5 transition-transform duration-300 group-hover:-rotate-45 lg:size-8" />
    </Button>
  );
};

export default ArrowButton;
