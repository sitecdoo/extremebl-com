import ContactForm from "@/components/contact/contact-form";
import { HeroBanner } from "@/components/custom-ui/banners";
import ContactBannerBlobs from "@/components/custom-ui/blobs/contact";
import Typography from "@/components/custom-ui/typography";
import { generatePageTitle } from "@/utils/generate-page-title";
import { FacebookIcon, InstagramIcon } from "lucide-react";

export async function generateMetadata() {
  return {
    title: generatePageTitle("Contact"),
  };
}

const ContactPage = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <ContactBannerBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner img="/contact-hero-banner.jpg" title="Kontakt" />
        <div className="flex w-full flex-col justify-start gap-14 lg:flex-row lg:px-12 xl:gap-24 xl:px-20 2xl:gap-40 2xl:px-36">
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
          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-1">
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
        <div className="w-full space-y-6 text-center lg:space-y-12">
          <Typography variant="h2" tag="h2" fontWeight="bold">
            Lokacija
          </Typography>
          <div className="h-[18rem] w-full lg:h-[43.75rem]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1416.1124305166602!2d17.21070856139592!3d44.77622092187391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e030cc563ea03%3A0x7cfedc831b0390d5!2sPenja%C4%8Dki%20klub%20Extreme!5e0!3m2!1sbs!2sba!4v1732545511105!5m2!1sbs!2sba"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
