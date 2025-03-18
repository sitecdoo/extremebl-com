import Image from "next/image";
import Typography from "../typography";
import { cn } from "@/lib/utils";

type HeroBannerProps = {
  img: string;
  title: string;
  position?: "object-top" | "object-left" | "object-right" | "object-bottom";
};

const HeroBanner = ({ img, title, position }: HeroBannerProps) => {
  return (
    <section className="relative w-full">
      <Image
        src={img}
        alt={title}
        width={1280}
        height={720}
        className={cn(
          "h-[31.25rem] min-w-72 rounded-2xl object-cover sm:w-full lg:h-[40.625rem] lg:rounded-40",
          position && position,
        )}
        priority
        quality={85}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
        loading="eager"
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-dark-500/0 to-dark-500/30 lg:rounded-40" />
      <Typography
        variant="h1"
        fontWeight="bold"
        className="absolute bottom-8 left-8 text-neutrals-50 lg:bottom-24 lg:left-24"
      >
        {title}
      </Typography>
      <div />
    </section>
  );
};

export default HeroBanner;
