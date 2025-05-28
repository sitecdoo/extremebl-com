import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import { getNavigationItems } from "./navbar-config";
import { Separator } from "@/components/ui/separator";
import MobileMenu from "./mobile-menu";
import { ReactNode } from "react";
import { LanguageBar } from "./language-bar";
import { getLanguage, LANGUAGES } from "@/utils/dictionary";
import NavItem from "./nav-item";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-60 text-neutrals-800 hover:bg-neutrals-75 xl:p-2"
  >
    {children}
  </Link>
);

const Navbar = async () => {
  const [currentLanguage, navigation] = await Promise.all([
    getLanguage(),
    getNavigationItems(),
  ]);

  return (
    <nav className="flex items-center justify-between bg-neutrals-50 px-4 py-4 md:px-8 md:py-6 lg:px-6 xl:px-12 xl:py-8">
      {/* Logo section */}
      <div className="flex items-center space-x-4 xl:space-x-6 2xl:space-x-10">
        <Link href="/">
          <Image
            width="70"
            height="48"
            alt="extreme logo"
            src="/navbar-logo.svg"
            className="h-7 w-11 md:h-9 md:w-12 xl:h-11 xl:w-16 2xl:h-14 2xl:w-20"
          />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-3 lg:flex lg:space-x-2 xl:space-x-6 2xl:space-x-4">
          {navigation.main.map((item) => (
            <NavItem key={item.href} href={item.href} name={item.label} />
          ))}
        </div>
      </div>
      {/* Desktop Secondary Items */}
      <div className="hidden items-center space-x-2 lg:flex xl:space-x-2">
        {navigation.secondary.map((item) => (
          <NavItem key={item.href} href={item.href} name={item.label} />
        ))}
        <NavLink href="https://www.facebook.com/extremebl/">
          <Facebook className="size-4 xl:size-6" />
        </NavLink>
        <NavLink href="https://www.instagram.com/extreme_bl/">
          <Instagram className="size-4 xl:size-6" />
        </NavLink>
        <Separator orientation="vertical" className="h-5 bg-neutrals-800" />
        <LanguageBar languages={LANGUAGES} currentLanguage={currentLanguage} />
      </div>
      {/* Mobile Menu */}
      <MobileMenu
        languages={LANGUAGES}
        currentLanguage={currentLanguage}
        navigation={navigation}
      />
    </nav>
  );
};

export default Navbar;
