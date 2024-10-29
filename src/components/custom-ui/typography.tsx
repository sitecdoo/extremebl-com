import type { PropsWithChildren } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const textVariants = cva("font-league-spartan", {
  variants: {
    variant: {
      caption: "text-xs lg:text-sm font-['Open_Sans']",
      "body-sm": "text-sm lg:text-lg lg:leading-6 font-['Open_Sans']",
      body: "text-base lg:text-xl lg:leading-8 font-['Open_Sans']",
      subtitle: "text-xl lg:text-3.5xl/10",
      h5: "text-2xl lg:text-3.5xl/10",
      h4: "text-2.5xl/9 lg:text-4xl lg:leading-11",
      h3: "text-4xl leading-11 lg:text-4.5xl lg:leading-12",
      h2: "text-4.5xl leading-12 lg:text-6xl lg:leading-14",
      h1: "text-5.5xl leading-13 lg:text-8xl lg:leading-15",
      display: "text-6.5xl leading-14 lg:text-9xl lg:leading-16",
    },
    fontWeight: {
      light: "font-light",
      bold: "font-bold",
    },
    uppercase: {
      true: "uppercase",
    },
  },
  defaultVariants: {
    variant: "body",
    fontWeight: "light",
  },
});

type HTMLTextElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type TextVariantProps = VariantProps<typeof textVariants>;

type TypographyProps = PropsWithChildren<
  TextVariantProps & {
    tag?: HTMLTextElement;
    className?: string | undefined;
    id?: string | undefined;
  }
>;

const Typography = ({
  children,
  tag = "p",
  className,
  id,
  ...variants
}: TypographyProps) => {
  const calculatedClassName = cn(textVariants({ ...variants, className }));
  const Element = tag;
  return (
    <Element id={id} className={calculatedClassName}>
      {children}
    </Element>
  );
};

export default Typography;
