import Image from "next/image";
import Typography from "../typography";
import { Button } from "@/components/ui/button";
import { MoveDown } from "lucide-react";
import Link from "next/link";
import { Dictionary } from "@/utils/dictionary";

const BigHeroBanner = ({
  dict,
}: {
  dict: Pick<Dictionary, "heroBanner" | "global">;
}) => {
  return (
    <section className="relative w-full">
      <Image
        src="/hero-image.jpg"
        alt="hero-banner"
        width={5379}
        height={4016}
        className="h-[40rem] min-w-64 rounded-2xl object-cover object-[70%] sm:w-full lg:h-[62.5rem] lg:rounded-40 lg:object-bottom"
        priority
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-dark-500/0 from-40% to-dark-500 lg:rounded-40 lg:bg-gradient-to-l lg:to-dark-500/50" />
      <div className="absolute bottom-10 left-0 px-4 text-neutrals-50 sm:bottom-20 sm:left-10 sm:max-w-xl sm:px-0 lg:left-14 lg:top-1/3 lg:max-w-2xl 2xl:left-32">
        {/*Banner title for desktop */}
        <Typography
          variant="display"
          tag="h3"
          fontWeight="extrabold"
          uppercase
          className="hidden w-[50rem] lg:block"
        >
          {dict.heroBanner.title}
        </Typography>
        {/*Banner title for mobile to fit on small screens*/}
        <Typography
          variant="h2"
          tag="h2"
          fontWeight="extrabold"
          uppercase
          className="lg:hidden"
        >
          {dict.heroBanner.title}
        </Typography>
        <Typography variant="subtitle" className="sm:mt-1">
          {dict.heroBanner.description}
        </Typography>
        <div className="mt-6 flex max-w-fit flex-col-reverse gap-4 sm:flex-row lg:mt-7 lg:gap-9">
          <Link href="/djeca-penjanje">
            <Button variant="yellow">
              <Typography fontWeight="bold">
                {dict.global.climbingForChildren}
              </Typography>
            </Button>
          </Link>
          <Link href="/odrasli-penjanje">
            <Button>
              <Typography fontWeight="bold">
                {dict.global.climbingForAdults}
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
      <div />
      <Image
        src="/icons/arrow-down-icon.svg"
        alt="arrow down"
        width={25}
        height={57}
        className="absolute bottom-16 right-16 hidden lg:block"
      />
      <MoveDown className="absolute bottom-10 right-4 size-6 text-neutrals-50 sm:right-8 sm:size-8 lg:hidden" />
    </section>
  );
};

export default BigHeroBanner;
