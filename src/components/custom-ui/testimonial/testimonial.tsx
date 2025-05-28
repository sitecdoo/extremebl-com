import { PropsWithChildren } from "react";
import Typography from "../typography";
import Image from "next/image";

type TesimonialProps = PropsWithChildren<{
  image: string;
  name: string;
  description: string;
}>;

const Testimonial = ({
  image,
  name,
  description,
  children,
}: TesimonialProps) => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-6 rounded-2xl bg-neutrals-100 px-9 py-10 lg:gap-10 lg:rounded-40 lg:p-20 xl:px-40 2xl:px-64">
      <div className="flex items-center gap-4">
        <Image
          width={480}
          height={321}
          src={image}
          alt={`${name}-image`}
          className="size-9 rounded-full object-cover"
          loading="lazy"
          decoding="sync"
          quality={65}
        />
        <Typography fontWeight="bold" uppercase>
          {name}
        </Typography>
      </div>
      <Typography variant="subtitle" className="text-center">
        {description}
      </Typography>
      {children}
    </div>
  );
};

export default Testimonial;
