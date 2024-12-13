import * as React from "react";
import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";
import { textVariants } from "../custom-ui/typography";
import { cva, VariantProps } from "class-variance-authority";
const inputVariants = cva(
  "flex w-full border-neutrals-200 bg-transparent ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "max-w-[22.5rem] rounded-md border-[1.5px] p-4 text-neutrals-700 placeholder:text-neutrals-400 focus-visible:border-neutrals-300 focus-visible:text-neutrals-600 lg:max-w-[33.1rem]",
        form: "border-b-2 border-neutrals-100 px-1 py-5 placeholder:text-neutrals-500 lg:px-6",
      },
      inputSize: {
        default: "h-12 lg:h-14",
        lg: "h-16 lg:h-[4.375rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  },
);
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: FieldError | undefined;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, variant, inputSize, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ variant, inputSize, className }),
          textVariants({ variant: variant === "form" ? "body" : "body-sm" }),
          error && "focus-visible:ring-red-500",
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
export { Input };
