import Image from "next/image";
import Typography from "./typography";
import { Dictionary } from "@/utils/dictionary";

const EmptyState = ({ dict }: { dict: Dictionary["blog"] }) => {
  return (
    <div className="mb-6 mt-16 flex flex-col items-center justify-center gap-5 sm:mb-0 lg:mt-11">
      <Image
        src="/blog/empty-state.svg"
        alt="no results"
        width={320}
        height={327}
        className="h-44 w-44 sm:h-max sm:w-max"
      />
      <div className="flex flex-col items-center justify-center gap-3">
        <Typography
          tag="h3"
          variant="h3"
          fontWeight="bold"
          className="text-center text-neutrals-900"
        >
          {dict.emptyTitle}
        </Typography>
        <Typography className="max-w-96 text-center text-neutrals-700">
          {dict.emptyDescription}
        </Typography>
      </div>
    </div>
  );
};

export default EmptyState;
