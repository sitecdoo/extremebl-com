import { HeroBanner } from "@/components/custom-ui/banners";
import {
  BenefitsCard,
  benefitsForAdults,
  BenefitsSection,
} from "@/components/custom-ui/benefits";
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
import Typography from "@/components/custom-ui/typography";
import { Button } from "@/components/ui/button";
import { carouselImages, pricingData } from "@/content/adults";
import { generatePageTitle } from "@/utils/generate-page-title";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: generatePageTitle("Adults"),
  };
}

const AdultsPage = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <AdultsBannerBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner
          img="/adults/adults-banner.jpg"
          title="Penjanje za odrasle"
          position="object-top"
        />
        <Header text="Penjanje za odrasle pruža uzbudljivu priliku za sve ljubitelje avanture, bez obzira na prethodno iskustvo. Bilo da želiš poboljšati svoju fizičku kondiciju, savladati nove izazove ili jednostavno uživati u kampovanju i boravku u prirodi." />
      </div>
      <div className="flex w-full flex-col gap-y-24 lg:gap-y-32">
        {/* 1 */}
        <InfoSection
          image="/adults/adults-info-1.jpg"
          title="Trening"
          description="Možeš trenirati samostalno u slobodnim terminima ili se pridružiti grupnim treninzima pod vodstvom trenera. Tokom slobodnih termina, dežurna osoba ti može pomoći u organizaciji treninga i pružiti savjete. Da bi se priključio/la dovoljno je da dođeš na jedan od treninga za odrasle."
        >
          <Button variant="black" className="w-fit">
            <Typography fontWeight="bold">Pogledaj raspord treninga</Typography>
          </Button>
        </InfoSection>
        {/* 2 */}
        <InfoSection
          image="/adults/adults-info-2.jpg"
          title="Osnovni kurs"
          description="Ovaj vikend kurs je namenjen početnicima i omogućava im da nauče da samostalno penju i osiguravaju na 'top rope'. Kada vremenski uslovi dozvole, kurs se održava na prirodnim stijenama."
          xPosition={85}
        >
          <div className="space-y-4">
            <Typography fontWeight="bold">Naredni termini</Typography>
            <RectangleWrapper text="29.03. - 30.03" />
            <RectangleWrapper text="26.04. - 27.04" />
          </div>
        </InfoSection>
        {/* 3 */}
        <InfoSection
          image="/adults/adults-info-3.jpg"
          title="Napredni kurs"
          description="Ovaj kurs je namenjen penjačima koji već imaju iskustva u penjanju na 'top rope' i žele da nauče da penju i osiguravaju na vođenje. Kurs traje mjesec dana i održava se dva puta sedmično. Ako vremenski uslovi dozvole, dio časova se održava na prirodnoj stijeni."
          xPosition={100}
        >
          <div className="space-y-4">
            <Typography fontWeight="bold">Naredni termini</Typography>
            <RectangleWrapper text="01.04. - 30.04" />
          </div>
          {/* <div className="space-y-6">
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
          </div> */}
        </InfoSection>
        {/* 4 */}
        <InfoSection
          image="/adults/adults-info-4.jpg"
          title="Izleti u prirodu"
          description="Već sa prvim dolaskom na trening stičeš pravo odlaska na izlete u prirodu. Oni se obično dešavaju vikendom, 1-2 puta mjesečno. Najčešće obilazimo okolna penjališta, ali ponekad organizujemo i putovanja u druge gradove i zemlje."
          xPosition={20}
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
        <AdultsBenefitsBlobs />
      </BenefitsSection>
      <PriceList pricingData={pricingData.prices}>
        <ListItem
          title={pricingData.schedule.title}
          data={pricingData.schedule.date}
        />
      </PriceList>
      <ImageCarousel images={carouselImages}>
        <AdultsCarouselBlobs />
      </ImageCarousel>
      <Header
        text="Spremni za novu avanturu? Pridružite se našoj penjačkoj ekipi i
          započnite svoje penjačko putovanje danas"
      >
        <Link href="/contact">
          <Button variant="blue" className="w-fit">
            <Typography fontWeight="bold">Kontaktiraj nas</Typography>
          </Button>
        </Link>
      </Header>
    </div>
  );
};

export default AdultsPage;
