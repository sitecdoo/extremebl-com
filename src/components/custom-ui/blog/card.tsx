import Image from "next/image";
import Typography from "../typography";
import { ArrowUpRight, Clock } from "lucide-react";
import Pill from "./pill";
import Link from "next/link";

type CardProps = {
  image: string;
  time: string;
  title: string;
  description: string;
  tags: string[];
  slug: string | number;
};

const Card = ({ image, time, title, description, tags, slug }: CardProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="group flex min-h-[28.75rem] min-w-60 max-w-[22.375rem] flex-col gap-3 rounded-2xl bg-neutrals-50 p-3 pb-4 hover:bg-neutrals-100 sm:min-h-[32.5rem] lg:min-h-[42.5rem] lg:max-w-[33.125rem] lg:gap-4 lg:rounded-28 lg:p-4 lg:pb-6">
        <div className="relative h-[11.375rem] lg:h-[18.75rem]">
          <Image
            className="h-full rounded-2xl object-cover lg:rounded-18"
            src={image || ""}
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
        <div className="flex w-full flex-grow flex-col gap-3 lg:gap-4">
          <div className="flex items-center gap-x-1 text-neutrals-500">
            <Clock className="size-5" />
            <Typography variant="caption">{time}</Typography>
          </div>
          <div className="mb-4 flex flex-grow flex-col gap-2 lg:gap-3">
            {/* Title for Mobile */}
            <Typography
              variant="h5"
              tag="h5"
              fontWeight="bold"
              className="line-clamp-2 lg:hidden"
            >
              {title}
            </Typography>
            {/* Title for Desktop */}
            <Typography
              variant="h4"
              tag="h4"
              fontWeight="bold"
              className="line-clamp-2 hidden lg:block"
            >
              {title}
            </Typography>

            <Typography variant="body-sm" className="line-clamp-5">
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

export default Card;
