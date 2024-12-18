import { HeroBanner } from "@/components/custom-ui/banners";
import Masonry from "@/components/custom-ui/masonry";
import { PackagesSection } from "@/components/custom-ui/packages";
import React from "react";
import { TestimonialSection } from "@/components/custom-ui/testimonial";
import InfoSection from "@/components/custom-ui/info-section";
import {
  teambuildingInfoSection as infoSectionData,
  teambuildingMasonryImages as masonryImages,
} from "./config";
import Header from "@/components/custom-ui/header";
import {
  TeambuildingBannerBlobs,
  TeambuildingTestimonialBlobs,
} from "@/components/custom-ui/blobs/teambuilding";
import { generatePageTitle } from "@/utils/generate-page-title";

export async function generateMetadata() {
  return {
    title: generatePageTitle("Teambuilding"),
  };
}

const TeambuildingPage = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <TeambuildingBannerBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner
          img="/teambuilding/teambuilding-banner.jpg"
          title="Teambuilding"
        />
        <Header text="Naša penjačka sala je idealno mjesto za teambuilding jer nudi jedinstvenu kombinaciju fizičkih i mentalnih izazova koji podstiču timsku saradnju i komunikaciju." />
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
      >
        <TeambuildingTestimonialBlobs />
      </TestimonialSection>
    </div>
  );
};

export default TeambuildingPage;
