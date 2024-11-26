import { HeroBanner } from "@/components/custom-ui/banners";
import InfoSection from "@/components/custom-ui/info-section";
import ServicesSection from "@/components/custom-ui/services";
import Typography from "@/components/custom-ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ImageCarousel from "@/components/custom-ui/image-carousel";
import { carouselImages, infoSectionData } from "./config";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner img="/about/hero-banner.jpg" title="O nama" />
        <Typography
          variant="h3"
          tag="h3"
          fontWeight="bold"
          className="max-w-[50rem] px-8 text-center"
        >
          Sportsko penjanje je oblik penjanja po stijenama ili umjetnim
          stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na
          fizičku snagu
        </Typography>
      </div>
      <div className="flex w-full flex-col gap-y-24 lg:gap-y-32">
        {infoSectionData.map((info, index) => (
          <InfoSection
            key={index}
            image={info.image}
            title={info.title}
            description={info.description}
          >
            <Button
              variant="ghost"
              className="mt-3 flex w-fit items-center gap-x-2 px-1 lg:mt-0"
            >
              <Typography tag="span" fontWeight="bold">
                Pročitaj više
              </Typography>
              <ArrowRight className="size-5 lg:size-8" strokeWidth={2} />
            </Button>
          </InfoSection>
        ))}
      </div>
      <ServicesSection />
      <ImageCarousel images={carouselImages} />
      <div className="flex flex-col items-center gap-6 lg:gap-12">
        <Typography
          variant="h3"
          tag="h3"
          fontWeight="bold"
          className="max-w-[50rem] px-8 text-center"
        >
          Posvećeni smo promociji sportskog penjanja kroz edukaciju, sigurnost i
          avanturu za sve ljubitelje ovog sporta.
        </Typography>
        <Button variant="blue" className="w-fit">
          <Typography fontWeight="bold">Kontaktiraj nas</Typography>
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
