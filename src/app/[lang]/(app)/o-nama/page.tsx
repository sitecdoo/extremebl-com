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
import { carouselImages } from "@/content/about";
import { generatePageTitle } from "@/utils/generate-page-title";
import ArrowButton from "@/components/custom-ui/arrow-button";
import Link from "next/link";
import { getDictionary } from "@/utils/dictionary";

export async function generateMetadata() {
  const dict = await getDictionary();
  return {
    title: generatePageTitle(dict.navigation.about),
  };
}

const AboutPage = async () => {
  const dict = await getDictionary();

  const infoSectionData = [
    {
      image: "/about/who-are-we.jpg",
      title: dict.infoSection.about[0].title,
      description: dict.infoSection.about[0].description,
    },
    {
      image: "/about/our-mission.jpg",
      title: dict.infoSection.about[1].title,
      description: dict.infoSection.about[1].description,
    },
  ];

  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <AboutBannerBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner img="/about/hero-banner.jpg" title={dict.about.banner} />
        <Header text={dict.about.header} />
      </div>
      <div className="flex w-full flex-col gap-y-24 lg:gap-y-32">
        <InfoSection
          image={infoSectionData[0].image}
          title={infoSectionData[0].title}
          description={infoSectionData[0].description}
        >
          <ArrowButton dict={dict.buttons} />
        </InfoSection>
        <InfoSection
          image={infoSectionData[1].image}
          title={infoSectionData[1].title}
          description={infoSectionData[1].description}
        />
      </div>
      <ServicesSection dict={dict.services} />
      <ImageCarousel images={carouselImages}>
        <AboutCarouselBlobs />
      </ImageCarousel>
      <Header text={dict.about.testimonial}>
        <Link href="/kontakt">
          <Button variant="blue" className="w-fit">
            <Typography fontWeight="bold">{dict.buttons.contactUs}</Typography>
          </Button>
        </Link>
      </Header>
    </div>
  );
};

export default AboutPage;
