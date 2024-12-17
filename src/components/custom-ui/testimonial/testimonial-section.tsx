import { Button } from "@/components/ui/button";
import Testimonial from "./testimonial";
import Typography from "../typography";
import { PropsWithChildren } from "react";

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
        name="Marija Peric"
        description={description}
      >
        {children}
      </Testimonial>
      <Button className="w-fit" variant="blue">
        <Typography fontWeight="bold">Kontaktiraj nas</Typography>
      </Button>
    </div>
  );
};
export default TestimonialSection;
