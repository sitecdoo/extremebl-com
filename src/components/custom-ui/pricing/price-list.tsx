import { Dictionary } from "@/utils/dictionary";
import Typography from "../typography";
import PricingBox from "./pricing-box";

type PriceListProps = {
  pricingData: { text: string; price: string }[];
  title: Dictionary["priceList"]["title"];
  children: React.ReactNode;
};

const PriceList = ({ pricingData, title, children }: PriceListProps) => {
  return (
    <div
      className="flex w-full scroll-mt-20 flex-col items-center justify-center gap-4 md:gap-12 md:px-8 lg:px-12 xl:px-20 2xl:px-36"
      id="pricing"
    >
      <Typography variant="h2" tag="h2" fontWeight="bold" className="w-full">
        {title}
      </Typography>
      <div className="flex w-full flex-col gap-4 sm:justify-between md:flex-row lg:gap-x-10">
        <div className="flex flex-col gap-4">{children}</div>
        <div className="mt-4 flex w-full flex-col gap-4 md:mt-0 md:w-1/2 xl:w-2/3">
          {pricingData.map((item, index) => (
            <PricingBox key={index} name={item.text} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceList;
