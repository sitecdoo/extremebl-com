import * as React from "react";

import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";
import { textVariants } from "../custom-ui/typography";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: FieldError | undefined;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex h-[14.5rem] w-full border-b-2 border-input bg-transparent px-1 py-5 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 lg:px-6",
          textVariants({ variant: "body" }),
          error && "focus-visible:ring-red-500",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
