import { HeroBanner } from "@/components/custom-ui/banners";
import InfoSection from "@/components/custom-ui/info-section";
import Masonry from "@/components/custom-ui/masonry";
import { PackagesSection } from "@/components/custom-ui/packages";
import React from "react";
import { TestimonialSection } from "@/components/custom-ui/testimonial";
import Header from "@/components/custom-ui/header";
import {
  BirthdaysBannerBlobs,
  BirthdaysTestemonialBlobs,
} from "@/components/custom-ui/blobs/birthdays";
import { masonryImages, infoSectionData } from "@/content/birthdays";

const Birthdays = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <BirthdaysBannerBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner img="/birthdays/hero.jpg" title="Rođendani" />
        <Header text="Proslavite rođendan vašeg deteta na jedinstven i uzbudljiv način! Naša penjačka sala nudi savršeno okruženje za nezaboravnu rođendansku proslavu." />
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
      <TestimonialSection description="“Ja sam oduševljena. Instruktori su za čistu desetku, nevjerovatni motivatori... Proslavili smo 14 rođendan i slavljenica kaže da joj je to bio najbolji rođendan!”">
        <BirthdaysTestemonialBlobs />
      </TestimonialSection>
    </div>
  );
};

export default Birthdays;
