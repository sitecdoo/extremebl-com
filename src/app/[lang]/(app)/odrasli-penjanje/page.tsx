import { HeroBanner } from "@/components/custom-ui/banners";
import { BenefitsCard, BenefitsSection } from "@/components/custom-ui/benefits";
import {
  AdultsBannerBlobs,
  AdultsBenefitsBlobs,
  AdultsCarouselBlobs,
} from "@/components/custom-ui/blobs/adults";
import Header from "@/components/custom-ui/header";
import ImageCarousel from "@/components/custom-ui/image-carousel";
import InfoSection from "@/components/custom-ui/info-section";
import { ListItem, PriceList } from "@/components/custom-ui/pricing";
import RectangleWrapper from "@/components/custom-ui/rectangle-wrapper";
import ScrollToButton from "@/components/custom-ui/scroll-to-button";
import Typography from "@/components/custom-ui/typography";
import { Button } from "@/components/ui/button";
import { carouselImages } from "@/content/adults";
import { getDictionary } from "@/utils/dictionary";
import { generatePageTitle } from "@/utils/generate-page-title";
import Link from "next/link";

export async function generateMetadata() {
  const dict = await getDictionary();
  return {
    title: generatePageTitle(dict.navigation.adults),
  };
}

const AdultsPage = async () => {
  const dict = await getDictionary();

  const pricingData = {
    schedule: {
      title: dict.priceList.adultsSchedules[0].title,
      date: [
        {
          day: dict.priceList.adultsSchedules[0].day[0],
          time: "19:00 - 22:00h",
        },
        {
          day: dict.priceList.adultsSchedules[0].day[1],
          time: "19:00 - 22:00h",
        },
        {
          day: dict.priceList.adultsSchedules[0].day[2],
          time: "19:00 - 22:00h",
        },
        {
          day: dict.priceList.adultsSchedules[0].day[3],
          time: "19:00 - 22:00h",
        },
      ],
    },
    prices: [
      { text: dict.priceList.adultsPrices[0], price: "10 KM" },
      { text: dict.priceList.adultsPrices[1], price: "45 KM" },
      { text: dict.priceList.adultsPrices[2], price: "70 KM" },
      { text: dict.priceList.adultsPrices[3], price: "240 KM" },
      { text: dict.priceList.adultsPrices[4], price: "420 KM" },
    ],
  };

  const benefitsData = [
    {
      title: dict.benefits.adults[0].title,
      description: dict.benefits.adults[0].description,
      image: "/icons/motor-skill-icon.svg",
    },
    {
      title: dict.benefits.adults[1].title,
      description: dict.benefits.adults[1].description,
      image: "/icons/confidence-icon.svg",
    },
    {
      title: dict.benefits.adults[2].title,
      description: dict.benefits.adults[2].description,
      image: "/icons/cognitive-icon.svg",
    },
  ];

  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <AdultsBannerBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner
          img="/adults/adults-banner.jpg"
          title={dict.adults.banner}
          position="object-top"
        />
        <Header text={dict.adults.header} />
      </div>
      <div className="flex w-full flex-col gap-y-24 lg:gap-y-32">
        {/* 1 */}
        <InfoSection
          image="/adults/adults-info-1.jpg"
          title={dict.infoSection.adults[0].title}
          description={dict.infoSection.adults[0].description}
        >
          <ScrollToButton
            elementId="pricing"
            text={dict.buttons.trainingSchedule}
            variant="black"
          />
        </InfoSection>
        {/* 2 */}
        <InfoSection
          image="/adults/adults-info-2.jpg"
          title={dict.infoSection.adults[1].title}
          description={dict.infoSection.adults[1].description}
          xPosition={85}
        >
          <div className="space-y-4">
            <Typography fontWeight="bold">
              {dict.adults.nextSessions}
            </Typography>
            <RectangleWrapper
              text="29.03. - 30.03"
              href="https://forms.gle/jPSnH41XGEf4c25S9"
              buttonText={dict.buttons.signUp}
            />
            <RectangleWrapper
              text="26.04. - 27.04"
              href="https://forms.gle/wPscJjUauwjdAWM98"
              buttonText={dict.buttons.signUp}
            />
          </div>
        </InfoSection>
        {/* 3 */}
        <InfoSection
          image="/adults/adults-info-3.jpg"
          title={dict.infoSection.adults[2].title}
          description={dict.infoSection.adults[2].description}
          xPosition={100}
        >
          <div className="space-y-4">
            <Typography fontWeight="bold">
              {dict.adults.nextSessions}
            </Typography>
            <RectangleWrapper
              text="01.04. - 30.04"
              href="https://forms.gle/hiHBh7zCgZpjs4Eu7"
              buttonText={dict.buttons.signUp}
            />
          </div>
        </InfoSection>
        {/* 4 */}
        <InfoSection
          image="/adults/adults-info-4.jpg"
          title={dict.infoSection.adults[3].title}
          description={dict.infoSection.adults[3].description}
          xPosition={20}
        />
      </div>
      <BenefitsSection title={dict.benefits.titleAdults}>
        {benefitsData.map((data, index) => (
          <BenefitsCard
            key={index}
            title={data.title}
            description={data.description}
            image={data.image}
          />
        ))}
        <AdultsBenefitsBlobs />
      </BenefitsSection>
      <PriceList pricingData={pricingData.prices} title={dict.priceList.title}>
        <ListItem
          title={pricingData.schedule.title}
          data={pricingData.schedule.date}
        />
      </PriceList>
      <ImageCarousel images={carouselImages}>
        <AdultsCarouselBlobs />
      </ImageCarousel>
      <Header text={dict.adults.testimonial}>
        <Link
          href={`kontakt?subject=${encodeURIComponent("odrasli-penjanje".replace(/ /g, "-"))}`}
        >
          <Button variant="blue" className="w-fit">
            <Typography fontWeight="bold">{dict.buttons.contactUs}</Typography>
          </Button>
        </Link>
      </Header>
    </div>
  );
};

export default AdultsPage;
