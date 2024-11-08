import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Typography from "../typography";
import { footerConfig } from "./footer-config";

const NavItems = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col justify-center">
    <Typography
      tag="p"
      variant="body-sm"
      fontWeight="bold"
      className="pb-7 sm:pb-8"
    >
      {title}
    </Typography>
    <Typography variant="body-sm" tag="h3">
      <div className="flex flex-col gap-y-6">{children}</div>
    </Typography>
  </div>
);

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center bg-neutrals-100 px-0 py-8 sm:px-8 sm:py-24 lg:px-20 2xl:px-44 2xl:py-24">
      <div className="flex h-full w-full flex-col items-center justify-between gap-x-10 sm:min-h-[22.5rem] sm:max-w-[90rem] sm:flex-row sm:items-start">
        <Link href="/" className="h-40 w-48 sm:h-fit sm:w-fit">
          <Image
            src="/logo-footer.svg"
            alt="logo-footer"
            width={409}
            height={328}
            priority
          />
        </Link>
        <section className="flex w-full flex-col px-4 sm:max-w-[50rem] sm:gap-y-20 sm:px-0">
          <div className="flex flex-col justify-between gap-x-5 gap-y-16 py-8 sm:flex-row sm:py-0">
            <NavItems title="Kompanija">
              {footerConfig.company.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </NavItems>
            <NavItems title="Aktivnosti">
              {footerConfig.activity.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </NavItems>
            <div className="flex flex-col justify-center">
              <Typography
                tag="p"
                variant="body-sm"
                fontWeight="bold"
                className="pb-7 sm:pb-8"
              >
                Kontakt
              </Typography>
              <div className="flex flex-col gap-y-7 sm:gap-y-8">
                <div className="flex items-center gap-3">
                  <Phone className="size-6" strokeWidth={1.5} />
                  <Typography tag="p" variant="body-sm">
                    065 779 027
                  </Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="size-6" strokeWidth={1.5} />
                  <a href="mailto:extremeclimbing@gmail.com">
                    <Typography tag="p" variant="body-sm">
                      extremeclimbing@gmail.com
                    </Typography>
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-6">
                    <MapPin className="size-6" strokeWidth={1.5} />
                  </div>
                  <Typography tag="p" variant="body-sm" className="sm:max-w-64">
                    Bulevar vojvode P. Bojovića 1, Banja Luka 78000
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className="flex items-center justify-between border-t-[0.5px] border-t-neutrals-300 pt-5 sm:pt-6">
              <Typography
                tag="p"
                variant="caption"
                className="w-44 flex-wrap text-neutrals-400 sm:w-fit"
              >
                Copyright 2024 Extreme Climbing. All Rights Reserved
              </Typography>
              <div className="flex gap-x-6">
                <a href="#">
                  <Facebook className="size-6 text-neutrals-400" />
                </a>
                <a href="#">
                  <Instagram className="size-6 text-neutrals-400" />
                </a>
              </div>
            </div>
          </section>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
