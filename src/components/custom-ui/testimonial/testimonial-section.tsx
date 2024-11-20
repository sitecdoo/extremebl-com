import { Button } from "@/components/ui/button";
import Testimonial from "./testimonial";
import Typography from "../typography";

const TestimonialSection = () => {
  return (
    <div className="flex w-full flex-col items-center gap-6 sm:px-10 md:px-16 lg:gap-12 lg:px-20 xl:px-36">
      <Testimonial
        image="/marija-peric.jpg"
        name="Marija Peric"
        description="Najviše mi se svidjelo kako su aktivnosti bile prilagođene našim sposobnostima, omogućujući svakom članu tima da se osjeća uključenim i podržanim. Ovo iskustvo je definitivno poboljšalo našu timsku dinamiku i preporučujemo ga svakome tko želi ojačati svoj tim kroz zabavu i avanturu!"
      />
      <Button className="w-fit" variant="blue">
        <Typography fontWeight="bold">Kontaktiraj nas</Typography>
      </Button>
    </div>
  );
};

export default TestimonialSection;
