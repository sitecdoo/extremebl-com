"use client";

import { Button } from "@/components/ui/button";
import Testimonial from "./testimonial";
import Typography from "../typography";
import { PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TestemonialSectionProps = PropsWithChildren<{
  description: string;
  name: string;
  image: string;
}>;

const TestimonialSection = ({
  description,
  name,
  image,
  children,
}: TestemonialSectionProps) => {
  const pathname = usePathname();
  const routePathanme = pathname.split("/")[2];

  return (
    <div className="flex w-full flex-col items-center gap-6 sm:px-10 md:px-16 lg:gap-12 lg:px-20 xl:px-36">
      <Testimonial image={image} name={name} description={description}>
        {children}
      </Testimonial>
      <Link href={`kontakt?subject=${encodeURIComponent(routePathanme)}`}>
        <Button variant="blue" className="w-fit">
          <Typography fontWeight="bold">Kontaktirajte nas</Typography>
        </Button>
      </Link>
    </div>
  );
};
export default TestimonialSection;
