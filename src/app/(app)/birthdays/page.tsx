import { HeroBanner } from "@/components/custom-ui/banners";
import InfoSection from "@/components/custom-ui/info-section";
import Masonry from "@/components/custom-ui/masonry";
import { PackagesSection } from "@/components/custom-ui/packages";
import React from "react";
import { birthdayImages } from "../config/masonry-config";
import { TestimonialSection } from "@/components/custom-ui/testimonial";
import Header from "@/components/custom-ui/header";
import {
  BirthdaysBannerBlobs,
  BirthdaysTestemonialBlobs,
} from "@/components/custom-ui/blobs/birthdays";
import { generatePageTitle } from "@/utils/generate-page-title";

export async function generateMetadata() {
  return {
    title: generatePageTitle("Birthdays"),
  };
}

const Birthdays = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <BirthdaysBannerBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner img="/birthdays/hero.jpg" title="Rođendani" />
        <Header text="Proslavite rođendan vašeg deteta na jedinstven i uzbudljiv način! Naša penjačka sala nudi savršeno okruženje za nezaboravnu rođendansku proslavu." />
      </div>
      <div className="flex w-full flex-col gap-y-24 lg:gap-y-32">
        <InfoSection
          image="/birthdays/info-section-1.jpg"
          title="Profesionalni instruktori"
          description="Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na fizičku snagu, tehniku i izdržljivost kako bi savladali različite penjačke rute. Ova aktivnost uključuje korištenje sigurnosn"
        />
        <InfoSection
          image="/birthdays/info-section-2.jpg"
          title="Sigurna oprema"
          description="Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na fizičku snagu, tehniku i izdržljivost kako bi savladali različite penjačke rute. Ova aktivnost uključuje korištenje sigurnosn"
        />
        <InfoSection
          image="/birthdays/info-section-3.jpg"
          title="Zabava za sve uzraste"
          description="Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na fizičku snagu, tehniku i izdržljivost kako bi savladali različite penjačke rute. Ova aktivnost uključuje korištenje sigurnosn"
        />
      </div>
      <PackagesSection />
      <Masonry images={birthdayImages} />
      <TestimonialSection description="“Ja sam oduševljena. Instruktori su za čistu desetku, nevjerovatni motivatori... Proslavili smo 14 rođendan i slavljenica kaže da joj je to bio najbolji rođendan!”">
        <BirthdaysTestemonialBlobs />
      </TestimonialSection>
    </div>
  );
};

export default Birthdays;
