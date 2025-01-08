import type { PropsWithChildren } from "react";
import { LoaderCircle } from "lucide-react";
import Typography from "./typography";
import { cn } from "@/lib/utils";

type AltchaWidgetProps = PropsWithChildren<{
  isVerifying: boolean;
}>;

const AltchaWidget = ({ isVerifying, children }: AltchaWidgetProps) => {
  return (
    <div className="relative ml-auto max-w-fit">
      {children}
      <div
        className={cn(
          "absolute -bottom-4 flex w-full justify-center duration-200",
          isVerifying ? "opacity-100" : "opacity-0",
        )}
      >
        <svg
          width="20"
          height="9"
          viewBox="0 0 20 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3409 1.21177C10.5794 0.523594 9.42058 0.523595 8.65906 1.21177L0.0407072 8.99999H19.9593L11.3409 1.21177Z"
            fill="#517B83"
          />
        </svg>
        <div className="absolute flex h-12 min-w-36 translate-y-2 items-center justify-center gap-2 rounded-lg bg-neutrals-100 px-4 md:px-6 lg:h-16 lg:w-72 lg:gap-3 lg:px-10">
          <LoaderCircle
            className="animate-spin xl:size-7 2xl:size-8"
            strokeWidth={2.5}
          />
          <Typography tag="span" variant="body-sm">
            Verifying...
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AltchaWidget;
