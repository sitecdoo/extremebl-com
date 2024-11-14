import { Check } from "lucide-react";
import Typography from "../typography";
import { Button } from "@/components/ui/button";

type PackageCardProps = {
  name: string;
  price: string;
  offers: string[];
};

const PackageCard = ({ name, price, offers }: PackageCardProps) => {
  return (
    <div className="flex w-80 min-w-60 max-w-80 flex-col gap-y-8 rounded-20 bg-neutrals-100 px-12 py-8 shadow-sm sm:w-full md:w-80 lg:w-[22.5rem] lg:max-w-[22.5rem] lg:gap-y-12 lg:px-14 lg:py-12">
      <div className="flex flex-col gap-y-6 lg:gap-y-9">
        <div className="flex w-fit flex-col items-center gap-3 self-center">
          <Typography variant="body-sm" uppercase>
            {name}
          </Typography>
          <Typography variant="h2" tag="h2" fontWeight="bold">
            {price}
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          {offers.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="size-6" strokeWidth={2} />
              <Typography key={index} variant="body-sm">
                {item}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      {/* TODO: Replace with button variant */}
      <Button className="w-fit self-center rounded-full bg-blue-500 px-5 py-4 text-neutrals-50 lg:px-6">
        <Typography fontWeight="bold">Rezerviši termin</Typography>
      </Button>
    </div>
  );
};

export default PackageCard;
