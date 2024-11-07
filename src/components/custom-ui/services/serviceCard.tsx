import Image from "next/image";
import Typography from "../typography";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className="flex min-h-80 min-w-72 flex-col items-center gap-y-6 rounded-2xl bg-neutrals-100 py-12 text-neutrals-800 sm:min-h-[25rem] sm:gap-y-8 sm:py-11 lg:justify-center lg:rounded-20 2xl:min-w-[25rem]">
      <Image
        src={image}
        width={90}
        height={90}
        alt={`${title}-icon`}
        className="size-[4.5rem] lg:size-[5.625rem]"
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
