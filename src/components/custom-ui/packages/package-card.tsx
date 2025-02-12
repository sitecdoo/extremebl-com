import { Check } from "lucide-react";
import Typography from "../typography";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type PackageCardProps = {
  name: string;
  price: string;
  offers: string[];
  className?: string;
};

const PackageCard = ({ name, price, offers, className }: PackageCardProps) => {
  return (
    <div
      className={cn(
        "flex w-80 min-w-60 max-w-80 flex-col gap-y-8 rounded-20 bg-neutrals-100 px-12 py-8 shadow-sm lg:w-[22.5rem] lg:max-w-[22.5rem] lg:gap-y-12 lg:px-14 lg:py-12",
        className,
      )}
    >
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
      <Link href={`contact?paket=${name.slice(-1)}`}>
        <Button className="w-fit self-center" variant="blue">
          <Typography fontWeight="bold">Rezervišite termin</Typography>
        </Button>
      </Link>
    </div>
  );
};

export default PackageCard;
