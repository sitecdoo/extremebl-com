import Image from "next/image";
import Typography from "../../typography";
import { ArrowUpRight, Clock } from "lucide-react";
import Pill from "../pill";
import Link from "next/link";

type SmallCardProps = {
  image: string;
  time: string;
  title: string;
  description: string;
  tags: string[];
  slug: string | number;
};

const SmallCard = ({
  image,
  time,
  title,
  description,
  tags,
  slug,
}: SmallCardProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="group flex min-h-[30rem] min-w-60 max-w-[21rem] flex-col gap-3 rounded-28 bg-neutrals-50 p-3 pb-4 hover:shadow-md lg:min-h-[33.5rem] lg:max-w-[25rem] lg:gap-4 lg:p-4 lg:pb-6">
        <div className="relative h-44 lg:h-[12.5rem]">
          <Image
            className="h-full rounded-18 object-cover"
            src={image}
            width={498}
            height={300}
            alt={`${title}-image`}
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            <div className="flex size-10 items-center justify-center rounded-full bg-neutrals-800 lg:size-12">
              <ArrowUpRight
                className="size-6 text-neutrals-50 lg:size-8"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-grow flex-col gap-3 lg:gap-5">
          <div className="flex items-center gap-x-1 text-neutrals-500 lg:gap-x-2">
            <Clock className="size-5" />
            <Typography variant="caption">{time}</Typography>
          </div>
          <div className="flex flex-grow flex-col gap-2 lg:gap-3">
            <Typography
              variant="h5"
              tag="h5"
              fontWeight="bold"
              className="line-clamp-2"
            >
              {title}
            </Typography>
            <Typography
              variant="body-sm"
              className="line-clamp-6 lg:line-clamp-4"
            >
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
    </Link>
  );
};

export default SmallCard;
