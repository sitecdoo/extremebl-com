import Image from "next/image";
import Typography from "./typography";
import { ArrowRight } from "lucide-react";

type InfoSectionProps = {
  image: string;
  title: string;
  description: string;
  buttonType: "Read more" | "register";
};

const InfoSection = ({
  image,
  title,
  description,
  buttonType,
}: InfoSectionProps) => {
  return (
    <div className="flex w-full flex-col gap-x-10 gap-y-6 text-neutrals-800 odd:md:flex-row even:md:flex-row-reverse lg:items-center lg:gap-x-16 2xl:gap-x-40">
      <Image
        src={image}
        alt="card"
        width={806}
        height={699}
        className="h-[22.5rem] min-w-72 rounded-2xl object-cover object-[30%] lg:h-[43.75rem] lg:rounded-20 lg:object-[40%]"
        priority
      />
      <div className="flex flex-col justify-center gap-y-3 lg:gap-y-10 xl:max-w-lg">
        <Typography variant="h2" tag="h2" fontWeight="bold">
          {title}
        </Typography>
        <Typography className="line-clamp-6 max-w-lg">{description}</Typography>
        {/* Replace buttons with shadcn buttons here */}
        {buttonType === "Read more" ? (
          <button className="mt-3 flex items-center gap-x-2 lg:mt-0">
            <Typography tag="span" fontWeight="bold">
              Pročitaj više
            </Typography>
            <ArrowRight className="size-5 lg:size-8" strokeWidth={2} />
          </button>
        ) : (
          <button className="mt-3 flex w-fit items-center rounded-60 bg-yellow-600 px-6 py-4 text-neutrals-50 lg:mt-0">
            <Typography tag="span" fontWeight="bold">
              Prijavi se
            </Typography>
          </button>
        )}
      </div>
    </div>
  );
};

export default InfoSection;
