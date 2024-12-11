import Image from "next/image";
import Typography from "./typography";

type InfoSectionProps = {
  image: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

const InfoSection = ({
  image,
  title,
  description,
  children,
}: InfoSectionProps) => {
  return (
    <div className="flex w-full flex-col gap-x-10 gap-y-6 text-neutrals-800 odd:md:flex-row even:md:flex-row-reverse lg:items-center lg:gap-x-16 2xl:gap-x-40">
      <Image
        src={image}
        alt="card"
        width={4000}
        height={2667}
        className="h-[22.5rem] w-full min-w-64 rounded-2xl object-cover object-[30%] md:w-3/4 lg:h-[43.75rem] lg:w-2/3 lg:rounded-20 lg:object-[60%] 2xl:w-1/2"
        priority
      />
      <div className="flex flex-col justify-center gap-y-6 lg:gap-y-10 xl:max-w-lg">
        <Typography variant="h2" tag="h2" fontWeight="bold">
          {title}
        </Typography>
        <Typography className="line-clamp-6 max-w-lg">{description}</Typography>
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
