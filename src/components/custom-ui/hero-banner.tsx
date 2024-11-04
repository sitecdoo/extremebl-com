import Image from "next/image";
import Typography from "./typography";

type HeroBannerProps = {
  img: string;
  title: string;
};

const HeroBanner = ({ img, title }: HeroBannerProps) => {
  return (
    <section className="flex justify-center">
      <div className="relative w-full max-w-[1632px]">
        <Image
          src={img}
          alt={title}
          width={1632}
          height={650}
          className="min-h-[500px] min-w-72 rounded-2xl object-cover object-[65%] sm:h-full sm:w-full lg:max-h-[650px] lg:rounded-[40px]"
          priority
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#393939]/0 to-[#393939]/30 lg:rounded-[40px]" />
        <Typography
          variant="h1"
          fontWeight="bold"
          className="absolute bottom-8 left-8 text-neutrals-50 lg:bottom-24 lg:left-24"
        >
          {title}
        </Typography>
        <div />
      </div>
    </section>
  );
};

export default HeroBanner;
