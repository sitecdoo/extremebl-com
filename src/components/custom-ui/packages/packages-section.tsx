"use client";

import React, { useState } from "react";
import PackageCard from "./package-card";
import Typography from "../typography";
import { Dictionary } from "@/utils/dictionary";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import BirthdayForm from "@/components/contact/birthday-form";

const PackagesSection = ({
  dict,
  birthdayFormDict,
}: {
  dict: Dictionary["packages"];
  birthdayFormDict: Dictionary["birthdayForm"];
}) => {
  const [selectedPackage, setSelectedPackage] = useState<
    "1" | "2" | "3" | null
  >(null);

  const data = [
    {
      name: dict.packageOne,
      price: "150 km",
      offers: [dict.twelveChildren, dict.twoHours, dict.space, dict.equipment],
    },
    {
      name: dict.packageTwo,
      price: "200 km",
      offers: [
        dict.eighteenChildren,
        dict.twoFiveHours,
        dict.space,
        dict.equipment,
      ],
    },
    {
      name: dict.packageThree,
      price: "250 km",
      offers: [
        dict.twentyFourChildren,
        dict.twoFiveHours,
        dict.space,
        dict.equipment,
      ],
    },
  ];

  return (
    <>
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
                text={dict.reserve}
                onReserve={() =>
                  setSelectedPackage(`${index + 1}` as "1" | "2" | "3")
                }
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog
        open={selectedPackage !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedPackage(null);
        }}
      >
        <DialogContent className="flex h-[90vh] max-w-2xl flex-col overflow-hidden p-0 [&>button]:hidden">
          <div className="flex flex-shrink-0 items-center justify-between border-b px-6 py-4">
            <DialogTitle asChild>
              <Typography variant="h4" tag="h2" fontWeight="bold">
                {birthdayFormDict.title}
              </Typography>
            </DialogTitle>
            <DialogDescription className="sr-only">
              {birthdayFormDict.title}
            </DialogDescription>
            <DialogClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
          {selectedPackage && (
            <ScrollArea className="flex-1">
              <div className="px-6 pb-6 pt-4">
                <BirthdayForm
                  dict={birthdayFormDict}
                  selectedPackage={selectedPackage}
                  onSuccess={() => setSelectedPackage(null)}
                />
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PackagesSection;
