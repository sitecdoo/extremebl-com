import { HeroBanner } from "@/components/custom-ui/banners";
import Masonry from "@/components/custom-ui/masonry";
import { PackagesSection } from "@/components/custom-ui/packages";
import Typography from "@/components/custom-ui/typography";
import React from "react";
import { TestimonialSection } from "@/components/custom-ui/testimonial";
import InfoSection from "@/components/custom-ui/info-section";
import {
  teambuildingInfoSection as infoSectionData,
  teambuildingMasonryImages as masonryImages,
} from "./config";

const TeambuildingPage = () => {
  return (
    <div className="flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner
          img="/teambuilding/teambuilding-banner.jpg"
          title="Teambuilding"
        />
        <Typography
          variant="h3"
          tag="h3"
          fontWeight="bold"
          className="max-w-[50rem] px-8 text-center"
        >
          Naša penjačka sala je idealno mjesto za teambuilding jer nudi
          jedinstvenu kombinaciju fizičkih i mentalnih izazova koji podstiču
          timsku saradnju i komunikaciju.
        </Typography>
      </div>
      <div className="flex w-full flex-col gap-y-24 lg:gap-y-32">
        {infoSectionData.map((info, index) => (
          <InfoSection
            key={index}
            image={info.image}
            title={info.title}
            description={info.description}
          />
        ))}
      </div>
      <PackagesSection />
      <Masonry images={masonryImages} />
      <TestimonialSection
        description='"Najviše mi se svidjelo kako su aktivnosti bile prilagođene našim sposobnostima, omogućujući svakom članu tima da se osjeća uključenim
         i podržanim. Ovo iskustvo je definitivno poboljšalo našu timsku dinamiku i preporučujemo ga svakome tko želi ojačati svoj tim kroz zabavu i avanturu!"'
      />
    </div>
  );
};

export default TeambuildingPage;
