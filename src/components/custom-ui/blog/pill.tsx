import { cn } from "@/lib/utils";
import Typography from "../typography";

interface PillProps {
  name: string;
  variant?: "regular" | "large";
}

const Pill = ({ name, variant = "regular" }: PillProps) => {
  return (
    <div
      className={cn(
        "rounded-full px-2 py-1 lg:py-[0.125rem]",
        variant === "regular" && "bg-neutrals-200",
        variant === "large" && "bg-blue-200 px-2.5 py-1",
      )}
    >
      <Typography
        variant={variant === "large" ? "body-sm" : "caption"}
        uppercase
        className={cn(variant === "large" && "text-neutrals-50")}
      >
        {name}
      </Typography>
    </div>
  );
};

export default Pill;
