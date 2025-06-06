import Image from "next/image";
import Typography from "../typography";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className="flex min-h-80 min-w-52 flex-col items-center justify-center gap-y-6 rounded-2xl bg-neutrals-100 pb-8 pt-11 text-neutrals-800 sm:min-h-[25rem] sm:gap-y-8 lg:rounded-20 2xl:min-w-[25rem]">
      <Image
        src={image}
        width={90}
        height={90}
        alt={`${title}-icon`}
        className="size-[4.5rem] lg:size-[5.625rem]"
        loading="lazy"
        decoding="sync"
        quality={65}
      />
      <div className="mx-8 flex min-w-40 flex-col items-center gap-y-4 text-center sm:mx-7 sm:max-w-80">
        <div>
          <Typography variant="h5" tag="h5" fontWeight="bold">
            {title}
          </Typography>
        </div>
        <Typography variant="body-sm">{description}</Typography>
      </div>
    </div>
  );
};

export default ServiceCard;
