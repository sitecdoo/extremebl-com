import Image from "next/image";
import Typography from "./typography";

type HeroBannerProps = {
  img: string;
  title: string;
};

const HeroBanner = ({ img, title }: HeroBannerProps) => {
  return (
    <section className="relative flex w-full max-w-[102rem] justify-center">
      <Image
        src={img}
        alt={title}
        width={1632}
        height={650}
        className="lg:rounded-40 h-[31.25rem] min-w-72 rounded-2xl object-cover object-[65%] sm:w-full lg:h-[40.625rem]"
        priority
      />
      <div className="lg:rounded-40 from-dark-500/0 to-dark-500/30 absolute inset-0 rounded-2xl bg-gradient-to-b" />
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
