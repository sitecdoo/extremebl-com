import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-60 font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        link: "text-primary underline-offset-4 hover:underline",
        black:
          "bg-neutrals-800 text-neutrals-50 hover:bg-neutrals-900 active:bg-neutrals-900",
        yellow:
          "bg-yellow-600 text-neutrals-50 hover:bg-yellow-700 active:bg-yellow-800",
        blue: "bg-blue-500 text-neutrals-50 hover:bg-blue-600 active:bg-blue-700",
        ghost:
          "bg-inherit text-neutrals-800 hover:bg-neutrals-100 active:bg-neutrals-200",
        sort: "bg-neutrals-200 text-neutrals-700 sm:bg-neutrals-100",
        filter:
          "bg-neutrals-100 text-neutrals-700 hover:bg-neutrals-200 active:bg-neutrals-200 data-[state=open]:bg-neutrals-200 lg:bg-neutrals-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        regular: "px-5 py-4 lg:px-6 lg:py-4",
        small: "px-4 py-3 lg:px-5 lg:py-4",
        xsmall: "px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "black",
      size: "regular",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
