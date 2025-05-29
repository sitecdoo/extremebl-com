import Image from "next/image";
import React from "react";
import Typography from "../typography";

type BenefitsCardProps = {
  title: string;
  description: string;
  image: string;
};

const BenefitsCard = ({ title, description, image }: BenefitsCardProps) => {
  return (
    <div className="flex min-h-[22rem] min-w-52 flex-col items-center justify-center gap-y-6 rounded-2xl bg-neutrals-100 text-neutrals-800 lg:min-h-[25rem] lg:max-w-[25rem] lg:justify-start lg:gap-y-8 lg:rounded-20">
      <Image
        src={image}
        width={90}
        height={90}
        alt={`${title}-icon`}
        loading="lazy"
        decoding="sync"
        quality={65}
        className="size-[4.5rem] lg:mt-10 lg:size-[5.625rem]"
      />
      <div className="mx-8 flex min-w-40 max-w-72 flex-col items-center gap-y-4 text-center lg:max-w-[21.5rem]">
        <Typography variant="h5" tag="h5" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body-sm">{description}</Typography>
      </div>
    </div>
  );
};

export default BenefitsCard;
