import Image from "next/image";
import Typography from "../../typography";
import { Clock } from "lucide-react";
import Pill from "../pill";
import Link from "next/link";

type SmallCardProps = {
  image: string;
  time: string;
  title: string;
  description: string;
  tags: string[];
};

const SmallCard = ({
  image,
  time,
  title,
  description,
  tags,
}: SmallCardProps) => {
  return (
    <div className="flex min-h-[30rem] min-w-60 max-w-[334px] flex-col gap-3 rounded-28 bg-neutrals-50 p-3 pb-4 hover:bg-neutrals-100 lg:min-h-[33.5rem] lg:max-w-[25rem] lg:gap-4 lg:p-4 lg:pb-6">
      <Link href="/blog">
        <Image
          className="h-44 rounded-18 object-cover lg:h-[12.5rem]"
          src={image}
          width={498}
          height={300}
          alt={`${title}-image`}
          priority
        />
      </Link>
      <div className="flex w-full flex-grow flex-col gap-3 lg:gap-5">
        <div className="flex items-center gap-x-1 text-neutrals-500 lg:gap-x-2">
          <Clock className="size-5" />
          <Typography variant="caption">{time}</Typography>
        </div>
        <div className="mb-5 flex flex-grow flex-col gap-2 lg:mb-2 lg:gap-3">
          <Link href={`/blog/`}>
            <Typography
              variant="h5"
              tag="h5"
              fontWeight="bold"
              className="line-clamp-2"
            >
              {title}
            </Typography>
          </Link>
          <Typography variant="body-sm" className="line-clamp-4">
            {description}
          </Typography>
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-2">
          {tags.map((name, index) => (
            <Pill key={index} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
