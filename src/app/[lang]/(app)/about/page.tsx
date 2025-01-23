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
        <Header
          text="Sportsko penjanje je oblik penjanja po stijenama ili umjetnim
          stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na
          fizičku snagu"
        />
      </div>
      <div className="flex w-full flex-col gap-y-24 lg:gap-y-32">
        {infoSectionData.map((info, index) => (
          <InfoSection
            key={index}
            image={info.image}
            title={info.title}
            description={info.description}
          >
            <ArrowButton />
          </InfoSection>
        ))}
      </div>
      <ServicesSection />
      <ImageCarousel images={carouselImages}>
        <AboutCarouselBlobs />
      </ImageCarousel>
      <Header
        text="Posvećeni smo promociji sportskog penjanja kroz edukaciju, sigurnost i
          avanturu za sve ljubitelje ovog sporta."
      >
        <Button variant="blue" className="w-fit">
          <Typography fontWeight="bold">Kontaktiraj nas</Typography>
        </Button>
      </Header>
    </div>
  );
};

export default AboutPage;
