import React from "react";
import packageData from "./package-data";
import PackageCard from "./package-card";
import Typography from "../typography";

const PackagesSection = () => {
  const data = packageData;
  return (
    <div className="flex flex-col items-center gap-y-5 lg:gap-y-16">
      <Typography tag="h2" variant="h2" fontWeight="bold">
        Paketi
      </Typography>
      <div className="flex w-screen justify-center px-10 md:bg-[#F7F7F7]">
        <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {data.map((item, index) => (
            <PackageCard
              key={index}
              name={item.name}
              price={item.price}
              offers={item.offers}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
