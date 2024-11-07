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
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
