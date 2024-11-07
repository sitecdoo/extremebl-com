import Image from "next/image";
import Typography from "../typography";
import { Button } from "@/components/ui/button";

const BigHeroBanner = () => {
  return (
    <section className="relative w-full">
      <Image
        src="/hero-image.jpg"
        alt="hero-banner"
        width={1632}
        height={1000}
        className="h-[47rem] min-w-64 rounded-2xl object-cover object-[70%] sm:w-full lg:h-[62.5rem] lg:rounded-40 lg:object-bottom"
        priority
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-dark-500/0 from-40% to-dark-500 lg:rounded-40 lg:bg-gradient-to-l lg:to-dark-500/50" />
      <div className="absolute left-0 top-1/2 px-4 text-neutrals-50 sm:left-10 sm:max-w-xl sm:px-0 lg:left-14 lg:top-1/3 lg:max-w-2xl 2xl:left-32">
        {/*Banner title for desktop */}
        <Typography
          variant="display"
          tag="h3"
          fontWeight="extrabold"
          uppercase
          className="hidden lg:block"
        >
          Započni avanturu
        </Typography>
        {/*Banner title for mobile to fit on small screens*/}
        <Typography
          variant="h2"
          tag="h2"
          fontWeight="extrabold"
          uppercase
          className="lg:hidden"
        >
          Započni avanturu
        </Typography>
        <Typography variant="subtitle" className="sm:mt-1">
          Kreni ka novim visinama, Pridruži se našem klubu!
        </Typography>
        {/*Replace buttons with shadcn buttons here*/}
        <div className="mt-6 flex max-w-fit flex-col-reverse gap-4 sm:flex-row lg:mt-7 lg:gap-9">
          <Button variant="yellow">
            <Typography fontWeight="bold">Penjanje za djecu</Typography>
          </Button>

          <Button>
            <Typography fontWeight="bold">Penjanje za odrasle</Typography>
          </Button>
        </div>
      </div>
      <div />
    </section>
  );
};

export default BigHeroBanner;
