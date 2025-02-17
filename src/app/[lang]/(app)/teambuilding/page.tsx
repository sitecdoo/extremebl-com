import { HeroBanner } from "@/components/custom-ui/banners";
import Masonry from "@/components/custom-ui/masonry";
import React from "react";
import { TestimonialSection } from "@/components/custom-ui/testimonial";
import InfoSection from "@/components/custom-ui/info-section";
import { masonryImages } from "@/content/teambuilding";
import Header from "@/components/custom-ui/header";
import {
  TeambuildingBannerBlobs,
  TeambuildingBenefitsBlobs,
  TeambuildingTestimonialBlobs,
} from "@/components/custom-ui/blobs/teambuilding";
import { generatePageTitle } from "@/utils/generate-page-title";
import { BenefitsCard, BenefitsSection } from "@/components/custom-ui/benefits";
import { getDictionary } from "@/utils/dictionary";

export async function generateMetadata() {
  const dict = await getDictionary();
  return {
    title: generatePageTitle(dict.navigation.teambuilding),
  };
}

const TeambuildingPage = async () => {
  const dict = await getDictionary();

  const benefitsData = [
    {
      title: dict.benefits.teambuilding[0].title,
      description: dict.benefits.teambuilding[0].description,
      image: "/icons/cooperation.svg",
    },
    {
      title: dict.benefits.teambuilding[1].title,
      description: dict.benefits.teambuilding[1].description,
      image: "/icons/over-limit.svg",
    },
    {
      title: dict.benefits.teambuilding[2].title,
      description: dict.benefits.teambuilding[2].description,
      image: "/icons/succeed-together.svg",
    },
  ];

  const infoSectionData = [
    {
      image: "/teambuilding/info-section-1.jpg",
      title: dict.infoSection.teambuilding[0].title,
      description: dict.infoSection.teambuilding[0].description,
    },
    {
      image: "/teambuilding/info-section-2.jpg",
      title: dict.infoSection.teambuilding[1].title,
      description: dict.infoSection.teambuilding[1].description,
    },
    {
      image: "/teambuilding/info-section-3.jpg",
      title: dict.infoSection.teambuilding[2].title,
      description: dict.infoSection.teambuilding[2].description,
    },
  ];

  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <TeambuildingBannerBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner
          img="/teambuilding/teambuilding-banner.jpg"
          title={dict.navigation.teambuilding}
        />
        <Header text={dict.teambuilding.header} />
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
      <BenefitsSection title={dict.benefits.titleTeambuilding}>
        {benefitsData.map((data, index) => (
          <BenefitsCard
            key={index}
            title={data.title}
            description={data.description}
            image={data.image}
          />
        ))}
        <TeambuildingBenefitsBlobs />
      </BenefitsSection>
      <Masonry images={masonryImages} />
      <TestimonialSection
        description={dict.teambuilding.testimonial}
        name="Mirjana Simić"
        image="/testemonial/mirjana-simic.png"
        text={dict.buttons.contactUs}
      >
        <TeambuildingTestimonialBlobs />
      </TestimonialSection>
    </div>
  );
};

export default TeambuildingPage;
