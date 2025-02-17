import React from "react";
import PackageCard from "./package-card";
import Typography from "../typography";
import { Dictionary } from "@/utils/dictionary";

const PackagesSection = ({ dict }: { dict: Dictionary["packages"] }) => {
  const data = [
    {
      name: dict.card[0].name,
      price: "150 km",
      offers: [
        dict.card[0].offers[0],
        dict.card[0].offers[1],
        dict.card[0].offers[2],
        dict.card[0].offers[3],
        dict.card[0].offers[4],
      ],
    },
    {
      name: dict.card[1].name,
      price: "200 km",
      offers: [
        dict.card[1].offers[0],
        dict.card[1].offers[1],
        dict.card[1].offers[2],
        dict.card[1].offers[3],
        dict.card[1].offers[4],
      ],
    },
    {
      name: dict.card[2].name,
      price: "250 km",
      offers: [
        dict.card[2].offers[0],
        dict.card[2].offers[1],
        dict.card[2].offers[2],
        dict.card[2].offers[3],
        dict.card[2].offers[4],
      ],
    },
  ];

  return (
    <div
      className="flex w-full scroll-m-20 flex-col items-center gap-y-5 lg:scroll-m-28 lg:gap-y-16"
      id="packages"
    >
      <Typography tag="h2" variant="h2" fontWeight="bold">
        {dict.title}
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
              text={dict.button}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
