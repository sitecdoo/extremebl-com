import { HeroBanner } from "@/components/custom-ui/banners";
import Typography from "@/components/custom-ui/typography";
import { FacebookIcon, InstagramIcon } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner img="/contact-hero-banner.jpg" title="Kontakt" />
        <div className="flex w-full flex-col justify-start gap-14 lg:flex-row lg:gap-24 lg:px-12 xl:px-20 2xl:gap-40 2xl:px-36">
          <div className="space-y-4 lg:max-w-lg">
            <Typography variant="h2" tag="h2" fontWeight="bold">
              Kontaktiraj nas
            </Typography>
            <Typography className="text-base text-neutrals-600">
              Imate pitanja ili trebate dodatne informacije? Slobodno nas
              kontaktirajte! Tu smo da vam pomognemo i pružimo sve potrebne
              informacije.
            </Typography>
          </div>
          <div className="flex flex-col gap-9">
            <div className="space-y-1">
              <Typography className="text-base text-neutrals-600">
                Telefon:
              </Typography>
              <Typography className="text-base" fontWeight="bold">
                +387 65 222 222
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-base text-neutrals-600">
                E-mail:
              </Typography>
              <Typography className="text-base" fontWeight="bold">
                extremeclimbing@gmail.com
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-base text-neutrals-600">
                Adresa:
              </Typography>
              <Typography className="text-base" fontWeight="bold">
                Marka Markovica 4<br />
                78 000
                <br />
                Banja Luka
              </Typography>
            </div>
            <div className="flex items-center gap-5">
              <FacebookIcon className="size-9" />
              <InstagramIcon className="size-9" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
