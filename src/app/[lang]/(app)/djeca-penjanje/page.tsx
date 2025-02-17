import { HeroBanner } from "@/components/custom-ui/banners";
import { BenefitsCard, BenefitsSection } from "@/components/custom-ui/benefits";
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
import { carouselImages } from "@/content/children";
import { generatePageTitle } from "@/utils/generate-page-title";
import Link from "next/link";
import ScrollToButton from "@/components/custom-ui/scroll-to-button";
import { getDictionary } from "@/utils/dictionary";

export async function generateMetadata() {
  const dict = await getDictionary();
  return {
    title: generatePageTitle(dict.navigation.children),
  };
}

const Children = async () => {
  const dict = await getDictionary();

  const infoSectionData = [
    {
      image: "/children/info-section-1.jpg",
      title: dict.infoSection.children[0].title,
      description: dict.infoSection.children[0].description,
      xPosition: 50,
      yPosition: 10,
    },
    {
      image: "/children/info-section-2.jpg",
      title: dict.infoSection.children[1].title,
      description: dict.infoSection.children[1].description,
      xPosition: 50,
      yPosition: 30,
    },
  ];

  const pricingData = {
    schedules: [
      {
        title: dict.priceList.childrenSchedules[0].title,
        date: [
          {
            day: dict.priceList.childrenSchedules[0].day[0],
            time: "19:00 - 20:00h",
          },
          {
            day: dict.priceList.childrenSchedules[0].day[1],
            time: "19:00 - 20:00h",
          },
        ],
      },
      {
        title: dict.priceList.childrenSchedules[1].title,
        date: [
          {
            day: dict.priceList.childrenSchedules[1].day[0],
            time: "19:30 - 21:00h",
          },
          {
            day: dict.priceList.childrenSchedules[1].day[1],
            time: "19:30 - 21:00h",
          },
        ],
      },
    ],
    prices: [
      { text: dict.priceList.childrenPrices[0], price: "10 KM" },
      { text: dict.priceList.childrenPrices[1], price: "50 KM" },
      {
        text: dict.priceList.childrenPrices[2],
        price: "80 KM",
      },
    ],
  };

  const benefitsData = [
    {
      title: dict.benefits.children[0].title,
      description: dict.benefits.children[0].description,
      image: "/icons/motor-skill-icon.svg",
    },
    {
      title: dict.benefits.children[1].title,
      description: dict.benefits.children[1].description,
      image: "/icons/confidence-icon.svg",
    },
    {
      title: dict.benefits.children[2].title,
      description: dict.benefits.children[2].description,
      image: "/icons/cognitive-icon.svg",
    },
  ];

  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <ChildrenBannerBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner img="/children/hero.jpg" title={dict.children.banner} />
        <Header text={dict.children.header} />
      </div>
      <div className="flex w-full flex-col gap-y-24 lg:gap-y-32">
        {infoSectionData.map((info, index) => (
          <InfoSection
            key={index}
            image={info.image}
            title={info.title}
            description={info.description}
            xPosition={info.xPosition}
            yPosition={info.yPosition}
          >
            <ScrollToButton
              elementId="contact"
              text={dict.buttons.signInChildren}
              variant="yellow"
            />
          </InfoSection>
        ))}
      </div>
      <BenefitsSection title={dict.benefits.titleChildren}>
        {benefitsData.map((data, index) => (
          <BenefitsCard
            key={index}
            title={data.title}
            description={data.description}
            image={data.image}
          />
        ))}
        <ChildrenBenefitsBlobs />
      </BenefitsSection>
      <PriceList pricingData={pricingData.prices} title={dict.priceList.title}>
        {pricingData.schedules.map((schedule, index) => (
          <ListItem key={index} title={schedule.title} data={schedule.date} />
        ))}
      </PriceList>
      <ImageCarousel images={carouselImages}>
        <ChildrenCarouselBlobs />
      </ImageCarousel>
      <div id="contact" className="scroll-mt-48">
        <Header text={dict.children.testimonial}>
          <Link
            href={`kontakt?subject=${encodeURIComponent("djeca-penjanje".replace(/ /g, "-"))}`}
          >
            <Button variant="blue" className="w-fit">
              <Typography fontWeight="bold">
                {dict.buttons.contactUs}
              </Typography>
            </Button>
          </Link>
        </Header>
      </div>
    </div>
  );
};

export default Children;
