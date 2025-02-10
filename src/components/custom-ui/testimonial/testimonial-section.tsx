import { Button } from "@/components/ui/button";
import Testimonial from "./testimonial";
import Typography from "../typography";
import { PropsWithChildren } from "react";
import Link from "next/link";

type TestemonialSectionProps = PropsWithChildren<{
  description: string;
}>;

const TestimonialSection = ({
  description,
  children,
}: TestemonialSectionProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-6 sm:px-10 md:px-16 lg:gap-12 lg:px-20 xl:px-36">
      <Testimonial
        image="/marija-peric.jpg"
        name="Ognjenka Jovičić"
        description={description}
      >
        {children}
      </Testimonial>
      <Link href="/contact">
        <Button variant="blue" className="w-fit">
          <Typography fontWeight="bold">Kontaktirajte nas</Typography>
        </Button>
      </Link>
    </div>
  );
};
export default TestimonialSection;
