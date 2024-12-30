import Image from "next/image";
import Typography from "./typography";

const EmptyState = () => {
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
          Nema rezultata za vašu pretragu!
        </Typography>
        <Typography className="max-w-96 text-center text-neutrals-700">
          Pokušajte promjeniti filtere ili pretražiti koristeći drugačije
          ključne reči.
        </Typography>
      </div>
    </div>
  );
};

export default EmptyState;
