import { HeroBanner } from "@/components/custom-ui/banners";
import InfoSection from "@/components/custom-ui/info-section";
import ServicesSection from "@/components/custom-ui/services";
import Typography from "@/components/custom-ui/typography";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/custom-ui/image-carousel";
import Header from "@/components/custom-ui/header";
import {
  AboutBannerBlobs,
  AboutCarouselBlobs,
} from "@/components/custom-ui/blobs/about";
import { carouselImages, infoSectionData } from "@/content/about";
import { generatePageTitle } from "@/utils/generate-page-title";
import ArrowButton from "@/components/custom-ui/arrow-button";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: generatePageTitle("About"),
  };
}

const AboutPage = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <AboutBannerBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner img="/about/hero-banner.jpg" title="O nama" />
        <Header text="Mi smo jedan od najstarijih penjačkih klubova u Bosni i Hercegovini, osnovan 2001. godine. Pored naše odlično opremljene penjačke sale, organizatori smo Pecka Rock Climbing i Drill & Chill Climbing and Highlining festivala, mnoštva kurseva, takmičenja, putovanja i kampovanje, te smo uredili preko 500 penjačkih smjerova." />
      </div>
      <div className="flex w-full flex-col gap-y-24 lg:gap-y-32">
        <InfoSection
          image={infoSectionData[0].image}
          title={infoSectionData[0].title}
          description={infoSectionData[0].description}
        >
          <ArrowButton />
        </InfoSection>
        <InfoSection
          image={infoSectionData[1].image}
          title={infoSectionData[1].title}
          description={infoSectionData[1].description}
        />
      </div>
      <ServicesSection />
      <ImageCarousel images={carouselImages}>
        <AboutCarouselBlobs />
      </ImageCarousel>
      <Header
        text="Posvećeni smo promociji sportskog penjanja kroz edukaciju, sigurnost i
          avanturu za sve ljubitelje ovog sporta."
      >
        <Link href="/kontakt">
          <Button variant="blue" className="w-fit">
            <Typography fontWeight="bold">Kontaktirajte nas</Typography>
          </Button>
        </Link>
      </Header>
    </div>
  );
};

export default AboutPage;
