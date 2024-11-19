import { HeroBanner } from "@/components/custom-ui/banners";
import ImageCarousel from "@/components/custom-ui/image-carousel";
import InfoSection from "@/components/custom-ui/info-section";
import ServicesSection from "@/components/custom-ui/services";
import Typography from "@/components/custom-ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const info = [
  {
    image: "/about/who-are-we.jpg",
    title: "Ko smo mi?",
    description:
      "Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na fizičku snagu, tehniku i izdržljivost kako bi savladali različite penjačke rute. Ova aktivnost uključuje korištenje sigurnosn",
  },
  {
    image: "/about/our-mission.jpg",
    title: "Naša misija",
    description:
      "Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na fizičku snagu, tehniku i izdržljivost kako bi savladali različite penjačke rute. Ova aktivnost uključuje korištenje sigurnosn",
  },
];

const images = [
  { url: "/about/carousel-1.jpg", alt: "ko smo mi" },
  { url: "/about/carousel-2.jpg", alt: "ko smo mi" },
  { url: "/about/carousel-3.jpg", alt: "ko smo mi" },
  { url: "/about/carousel-4.jpg", alt: "ko smo mi" },
  { url: "/about/carousel-5.jpg", alt: "ko smo mi" },
  { url: "/about/carousel-6.jpg", alt: "ko smo mi" },
  { url: "/about/carousel-7.jpg", alt: "ko smo mi" },
  { url: "/about/carousel-8.jpg", alt: "ko smo mi" },
  { url: "/about/carousel-9.jpg", alt: "ko smo mi" },
  { url: "/about/carousel-10.jpg", alt: "ko smo mi" },
  { url: "/about/carousel-11.jpg", alt: "ko smo mi" },
  { url: "/about/carousel-12.jpg", alt: "ko smo mi" },
  { url: "/about/carousel-12.jpg", alt: "ko smo mi" },
  { url: "/about/carousel-13.jpg", alt: "ko smo mi" },
];

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
        {info.map((info, index) => (
          <InfoSection
            key={index}
            image={info.image}
            title={info.title}
            description={info.description}
          >
            <button className="mt-3 flex items-center gap-x-2 lg:mt-0">
              <Typography tag="span" fontWeight="bold">
                Pročitaj više
              </Typography>
              <ArrowRight className="size-5 lg:size-8" strokeWidth={2} />
            </button>
          </InfoSection>
        ))}
      </div>
      <ServicesSection />
      <ImageCarousel images={images} />
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
