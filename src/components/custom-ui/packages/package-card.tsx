import { Check } from "lucide-react";
import Typography from "../typography";

type PackageCardProps = {
  name: string;
  price: string;
  reward: string[];
};

const PackageCard = ({ name, price, reward }: PackageCardProps) => {
  return (
    <div className="flex w-full min-w-60 max-w-80 flex-col rounded-20 bg-neutrals-100 px-12 py-8 shadow-sm">
      <div className="flex flex-col gap-6">
        <div className="flex w-fit flex-col items-center gap-3 self-center">
          <Typography variant="body-sm" uppercase>
            {name}
          </Typography>
          <Typography variant="h2" tag="h2" fontWeight="bold">
            {price}
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          {reward.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="size-6" strokeWidth={2} />
              <Typography key={index} variant="body-sm">
                {item}
              </Typography>
            </div>
          ))}
        </div>
        <button className="mt-2 w-fit self-center rounded-full bg-blue-500 px-5 py-4 text-neutrals-50">
          <Typography fontWeight="bold">Rezerviši termin</Typography>
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
