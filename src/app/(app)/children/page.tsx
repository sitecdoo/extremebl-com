import { HeroBanner } from "@/components/custom-ui/banners";
import { BenefitsCard, BenefitsSection } from "@/components/custom-ui/benefits";
import { benefitsForChildren } from "@/components/custom-ui/benefits/benefits-data";
import ImageCarousel from "@/components/custom-ui/image-carousel";
import InfoSection from "@/components/custom-ui/info-section";
import {
  ListItem,
  PriceList,
  PricingData,
} from "@/components/custom-ui/pricing";
import Typography from "@/components/custom-ui/typography";
import { Button } from "@/components/ui/button";
import React from "react";
import { carouselImages } from "./config";
import Header from "@/components/custom-ui/header";
import {
  ChildrenBannerBlobs,
  ChildrenBenefitsBlobs,
  ChildrenCarouselBlobs,
} from "@/components/custom-ui/blobs/children";

const Children = () => {
  const data = PricingData;
  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <ChildrenBannerBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner img="/children/hero.jpg" title="Penjanje za djecu" />
        <Header text="Penjanje je nevjerovatna aktivnost za djecu koja poboljšava snagu, koordinaciju i vještine rješavanja problema. Povećava samopouzdanje, pruža osjećaj uspjeha i podstiče timski rad." />
      </div>
      <div className="flex w-full flex-col gap-y-24 lg:gap-y-32">
        <InfoSection
          image="/children/info-section-1.jpg"
          title="Djeca mlađeg uzrasta"
          description="Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na fizičku snagu, tehniku i izdržljivost kako bi savladali različite penjačke rute. Ova aktivnost uključuje korištenje sigurnosn"
        />
        <InfoSection
          image="/children/info-section-2.jpg"
          title="Djeca starijeg uzrasta"
          description="Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na fizičku snagu, tehniku i izdržljivost kako bi savladali različite penjačke rute. Ova aktivnost uključuje korištenje sigurnosn"
        />
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
      <PriceList pricingData={data.childrenPrices}>
        <ListItem
          title={data.youngerChildren.title}
          data={data.youngerChildren.date}
        />
        <ListItem
          title={data.olderChildren.title}
          data={data.olderChildren.date}
        />
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
