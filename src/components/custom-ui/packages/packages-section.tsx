import React from "react";
import packageData from "./package-data";
import PackageCard from "./package-card";
import Typography from "../typography";

const PackagesSection = () => {
  const data = packageData;
  return (
    <div
      className="flex w-full scroll-m-20 flex-col items-center gap-y-5 lg:scroll-m-28 lg:gap-y-16"
      id="packages"
    >
      <Typography tag="h2" variant="h2" fontWeight="bold">
        Paketi
      </Typography>
      <div className="flex w-full justify-center">
        <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {data.map((item, index) => (
            <PackageCard
              key={index}
              name={item.name}
              price={item.price}
              offers={item.offers}
              className={`${index === 2 && "md:col-span-2 md:justify-self-center xl:col-span-1"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
