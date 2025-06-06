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
      title: dict.priceList.adultTraining,
      date: [
        { day: dict.days.tuesday, time: "19:00 - 22:00h" },
        { day: dict.days.wednesday, time: "19:00 - 22:00h" },
        { day: dict.days.thursday, time: "19:00 - 22:00h" },
        { day: dict.days.sunday, time: "19:00 - 22:00h" },
      ],
    },
    prices: [
      { text: dict.priceList.dailyPass, price: "10 KM" },
      { text: dict.priceList.monthly, price: "45 KM" },
      { text: dict.priceList.entries, price: "70 KM" },
      { text: dict.priceList.halfYear, price: "240 KM" },
      { text: dict.priceList.annual, price: "420 KM" },
    ],
  };

  const benefitsData = [
    {
      title: dict.benefits.adults.fitnessTitle,
      description: dict.benefits.adults.fitnessDescription,
      image: "/icons/motor-skill-icon.svg",
    },
    {
      title: dict.benefits.adults.mentalTitle,
      description: dict.benefits.adults.mentalDescription,
      image: "/icons/confidence-icon.svg",
    },
    {
      title: dict.benefits.adults.socialTitle,
      description: dict.benefits.adults.socialDescription,
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
          title={dict.infoSection.adults.trainingTitle}
          description={dict.infoSection.adults.trainingDescription}
        >
          <ScrollToButton
            elementId="pricing"
            text={dict.global.trainingSchedule}
            variant="black"
          />
        </InfoSection>
        {/* 2 */}
        <InfoSection
          image="/adults/adults-info-2.jpg"
          title={dict.infoSection.adults.basicCourseTitle}
          description={dict.infoSection.adults.basicCourseDescription}
          xPosition={85}
        >
          <div className="space-y-4">
            <Typography fontWeight="bold">
              {dict.adults.nextSessions}
            </Typography>
            <RectangleWrapper
              text="05.04. - 06.04"
              href="https://forms.gle/EuDQyCdKXdWhKPnJ7"
              buttonText={dict.global.signUp}
            />
            <RectangleWrapper
              text={dict.adults.waitingList}
              href="https://forms.gle/QUSEXP6p9vyUtRSQ7"
              buttonText={dict.global.signUp}
            />
          </div>
        </InfoSection>
        {/* 3 */}
        <InfoSection
          image="/adults/adults-info-3.jpg"
          title={dict.infoSection.adults.advancedCourseTitle}
          description={dict.infoSection.adults.advancedCourseDescription}
          xPosition={100}
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <Typography fontWeight="bold">
                {dict.adults.noScheduledCourses}
              </Typography>
              <Typography>
                {dict.adults.joinWaitingList}
              </Typography>
            </div>
            <RectangleWrapper
              text={dict.adults.waitingList}
              href="https://forms.gle/JRWvBwJiehRridcP8"
              buttonText={dict.global.signUp}
            />
          </div>
        </InfoSection>
        {/* 4 */}
        <InfoSection
          image="/adults/adults-info-4.jpg"
          title={dict.infoSection.adults.fieldTripTitle}
          description={dict.infoSection.adults.fieldTripDescription}
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
            <Typography fontWeight="bold">{dict.global.contactUs}</Typography>
          </Button>
        </Link>
      </Header>
    </div>
  );
};

export default AdultsPage;
