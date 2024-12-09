import { HeroBanner } from "@/components/custom-ui/banners";
import {
  BenefitsCard,
  benefitsForAdults,
  BenefitsSection,
} from "@/components/custom-ui/benefits";
import AdultsBlobs from "@/components/custom-ui/blobs/adults-blobs";
import Header from "@/components/custom-ui/header";
import ImageCarousel from "@/components/custom-ui/image-carousel";
import InfoSection from "@/components/custom-ui/info-section";
import {
  ListItem,
  PriceList,
  PricingData,
} from "@/components/custom-ui/pricing";
import RectangleWrapper from "@/components/custom-ui/rectangle-wrapper";
import Typography from "@/components/custom-ui/typography";
import { Button } from "@/components/ui/button";

const AdultsPage = () => {
  const pricingData = PricingData;

  const carouselImages = [
    { src: "/adults/adults-carousel-1.jpg", alt: "carousel image" },
    { src: "/adults/adults-carousel-2.jpg", alt: "carousel image" },
    { src: "/adults/adults-carousel-3.jpg", alt: "carousel image" },
    { src: "/adults/adults-carousel-4.jpg", alt: "carousel image" },
    { src: "/adults/adults-carousel-5.jpg", alt: "carousel image" },
    { src: "/adults/adults-carousel-6.jpg", alt: "carousel image" },
    { src: "/adults/adults-carousel-7.jpg", alt: "carousel image" },
    { src: "/adults/adults-carousel-8.jpg", alt: "carousel image" },
    { src: "/adults/adults-carousel-9.jpg", alt: "carousel image" },
    { src: "/adults/adults-carousel-10.jpg", alt: "carousel image" },
  ];

  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <AdultsBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner
          img="/adults/adults-banner.jpg"
          title="Penjanje za odrasle"
        />
        <Header
          text="Penjanje je nevjerovatna aktivnost za djecu koja poboljšava snagu,
          koordinaciju i vještine rješavanja problema. Povećava samopouzdanje,
          pruža osjećaj uspjeha i podstiče timski rad."
        />
      </div>
      <div className="flex w-full flex-col gap-y-24 lg:gap-y-32">
        {/* 1 */}
        <InfoSection
          image="/adults/adults-info-1.jpg"
          title="Trening za odrasle"
          description="Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na fizičku snagu, tehniku i izdržljivost kako bi savladali različite penjačke rute. Ova aktivnost uključuje korištenje sigurnosn"
        >
          <Button variant="black" className="w-fit">
            <Typography fontWeight="bold">Prijavi se</Typography>
          </Button>
        </InfoSection>
        {/* 2 */}
        <InfoSection
          image="/adults/adults-info-2.jpg"
          title="Osnovni kurs"
          description="Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na fizičku snagu, tehniku i izdržljivost kako bi savladali različite penjačke rute. Ova aktivnost uključuje korištenje sigurnosn"
        >
          <div className="space-y-4">
            <Typography fontWeight="bold">Naredni termini</Typography>
            <RectangleWrapper text="01.11. - 30.11" />
            <RectangleWrapper text="01.11. - 30.11" />
          </div>
        </InfoSection>
        {/* 3 */}
        <InfoSection
          image="/adults/adults-info-3.jpg"
          title="Napredni kurs"
          description="Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na fizičku snagu, tehniku i izdržljivost kako bi savladali različite penjačke rute. Ova aktivnost uključuje korištenje sigurnosn"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <Typography fontWeight="bold">
                Trenutno nema dostupnih termina
              </Typography>
              <Typography>
                Prijavite se na listu čekanja kako biste prvi saznali kada budu
                dostupni novi termini!
              </Typography>
            </div>
            <RectangleWrapper text="Waiting lista" />
          </div>
        </InfoSection>
        {/* 4 */}
        <InfoSection
          image="/adults/adults-info-4.jpg"
          title="Izleti u prirodu"
          description="Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na fizičku snagu, tehniku i izdržljivost kako bi savladali različite penjačke rute. Ova aktivnost uključuje korištenje sigurnosn"
        />
      </div>
      <BenefitsSection title="Benefiti penjanja za odrasle">
        {benefitsForAdults.map((data, index) => (
          <BenefitsCard
            key={index}
            title={data.title}
            description={data.description}
            image={data.image}
          />
        ))}
      </BenefitsSection>
      <PriceList pricingData={pricingData.adultPrices}>
        <ListItem
          title={pricingData.adults.title}
          data={pricingData.adults.date}
        />
      </PriceList>
      <ImageCarousel images={carouselImages} />
      <Header
        text="Spremni za novu avanturu? Pridružite se našoj penjačkoj ekipi i
          započnite svoje penjačko putovanje danas"
      >
        <Button variant="blue" className="w-fit">
          <Typography fontWeight="bold">Kontaktiraj nas</Typography>
        </Button>
      </Header>
    </div>
  );
};

export default AdultsPage;
