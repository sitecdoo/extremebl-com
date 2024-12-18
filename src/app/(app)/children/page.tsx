import { HeroBanner } from "@/components/custom-ui/banners";
import { BenefitsCard, BenefitsSection } from "@/components/custom-ui/benefits";
import { benefitsForChildren } from "@/components/custom-ui/benefits/benefits-data";
import ImageCarousel from "@/components/custom-ui/image-carousel";
import InfoSection from "@/components/custom-ui/info-section";
import { ListItem, PriceList } from "@/components/custom-ui/pricing";
import Typography from "@/components/custom-ui/typography";
import { Button } from "@/components/ui/button";
import React from "react";
import Header from "@/components/custom-ui/header";
import {
  ChildrenBannerBlobs,
  ChildrenBenefitsBlobs,
  ChildrenCarouselBlobs,
} from "@/components/custom-ui/blobs/children";
import {
  carouselImages,
  infoSectionData,
  pricingData,
} from "@/content/children";

const Children = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <ChildrenBannerBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner img="/children/hero.jpg" title="Penjanje za djecu" />
        <Header text="Penjanje je nevjerovatna aktivnost za djecu koja poboljšava snagu, koordinaciju i vještine rješavanja problema. Povećava samopouzdanje, pruža osjećaj uspjeha i podstiče timski rad." />
      </div>
      <div className="flex w-full flex-col gap-y-24 lg:gap-y-32">
        {infoSectionData.map((info, index) => (
          <InfoSection
            key={index}
            image={info.image}
            title={info.title}
            description={info.description}
          >
            <Button variant="yellow" className="w-fit">
              <Typography fontWeight="bold">Prijavi se</Typography>
            </Button>
          </InfoSection>
        ))}
      </div>
      <BenefitsSection title="Benefiti penjanja za djecu">
        {benefitsForChildren.map((data, index) => (
          <BenefitsCard
            key={index}
            title={data.title}
            description={data.description}
            image={data.image}
          />
        ))}
        <ChildrenBenefitsBlobs />
      </BenefitsSection>
      <PriceList pricingData={pricingData.prices}>
        {pricingData.schedules.map((schedule, index) => (
          <ListItem key={index} title={schedule.title} data={schedule.date} />
        ))}
      </PriceList>
      <ImageCarousel images={carouselImages}>
        <ChildrenCarouselBlobs />
      </ImageCarousel>
      <Header text="Zainteresirani ste za penjanje za vaše mališane? Prijavite se danas i omogućite im da se penju prema zvijezdama s osmijehom na licu!">
        <Button variant="blue" className="w-fit">
          <Typography fontWeight="bold">Kontaktiraj nas</Typography>
        </Button>
      </Header>
    </div>
  );
};

export default Children;
