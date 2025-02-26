import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Typography from "../typography";
import { getFooterItems } from "./footer-config";
import { getDictionary } from "@/utils/dictionary";

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
      className="pb-7 md:pb-8"
    >
      {title}
    </Typography>
    <Typography variant="body-sm" tag="h3">
      <div className="flex flex-col gap-y-6">{children}</div>
    </Typography>
  </div>
);

const Footer = async () => {
  const dict = await getDictionary();
  const navigation = await getFooterItems();
  const { company, activity, contact } = navigation;

  return (
    <footer className="flex w-full items-center justify-center bg-neutrals-100 px-0 py-8 md:px-8 md:py-24 lg:px-20 2xl:px-44 2xl:py-24">
      <div className="flex h-full w-full flex-col items-center justify-between gap-x-10 md:min-h-[22.5rem] md:max-w-[90rem] md:flex-row md:items-start">
        <Link href="/" className="h-40 w-48 md:h-fit md:w-fit">
          <Image
            src="/logo-footer.svg"
            alt="logo-footer"
            width={409}
            height={328}
            priority
          />
        </Link>
        <section className="flex w-full flex-col px-4 md:max-w-[50rem] md:gap-y-20 md:px-0">
          <div className="flex flex-col justify-between gap-x-5 gap-y-16 py-8 md:flex-row md:py-0">
            <NavItems title={dict.footer.info}>
              {company.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </NavItems>
            <NavItems title={dict.footer.activities}>
              {activity.map((item) => (
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
                className="pb-7 md:pb-8"
              >
                {contact.name}
              </Typography>
              <div className="flex flex-col gap-y-7 md:gap-y-8">
                <div className="flex items-center gap-3">
                  <Phone className="size-6" strokeWidth={1.5} />
                  <Typography tag="p" variant="body-sm">
                    {contact.phone}
                  </Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="size-6" strokeWidth={1.5} />
                  <Link href={`mailto:${contact.email}`}>
                    <Typography tag="p" variant="body-sm">
                      {contact.email}
                    </Typography>
                  </Link>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-6">
                    <MapPin className="size-6" strokeWidth={1.5} />
                  </div>
                  <Typography tag="p" variant="body-sm" className="md:max-w-64">
                    {contact.location}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className="flex items-center justify-between border-t-[0.5px] border-t-neutrals-300 pt-5 md:pt-6">
              <div className="flex flex-col gap-y-2">
                <Typography
                  variant="caption"
                  className="w-44 flex-wrap text-neutrals-400 sm:w-fit"
                >
                  Copyright 2025 Extreme Climbing. All Rights Reserved
                </Typography>
                <Typography
                  variant="caption"
                  className="flex flex-wrap gap-1 text-neutrals-400 sm:w-fit"
                >
                  Developed by
                  <Link
                    href="https://sitec.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sitec.dev
                  </Link>
                </Typography>
              </div>
              <div className="flex gap-x-6 self-start">
                <Link
                  href="https://www.facebook.com/extremebl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="size-6 text-neutrals-400" />
                </Link>
                <Link
                  href="https://www.instagram.com/extreme_bl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="size-6 text-neutrals-400" />
                </Link>
              </div>
            </div>
          </section>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
