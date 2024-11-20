"use client";

import * as React from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MobileMenu } from "./mobile-menu";
import { navbarConfig } from "./navbar-config";
import Typography from "@/components/custom-ui/typography";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import LanguageSelector from "./language-selector";

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} className="rounded-60 text-neutrals-800 hover:bg-[#F8F7F2]">
    {children}
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMobileMenuClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between bg-neutrals-50 px-4 py-4 md:px-8 md:py-6 xl:px-12 xl:py-8">
      {/* Logo section */}
      <div className="flex items-center space-x-4 2xl:space-x-6">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              width="70"
              height="48"
              alt="extreme logo"
              src="/navbar-logo.svg"
              className="h-7 w-11 md:h-9 md:w-12 xl:h-11 xl:w-16"
            />
          </div>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-3 lg:flex lg:space-x-2 xl:space-x-6">
          {navbarConfig.main.map((item) => (
            <NavItem key={item.href} href={item.href}>
              <Typography
                className={cn(
                  "rounded-60 px-3 py-2 text-base lg:text-base xl:text-base 2xl:px-5 2xl:text-xl",
                  pathname === item.href && "bg-neutrals-100",
                )}
              >
                {item.label}
              </Typography>
            </NavItem>
          ))}
        </div>
      </div>

      {/* Desktop Secondary Items */}
      <div className="hidden items-center space-x-2 lg:flex xl:space-x-4">
        {navbarConfig.secondary.map((item) => (
          <NavItem key={item.href} href={item.href}>
            <Typography
              className={cn(
                "rounded-60 px-2 py-2 text-base lg:text-base xl:px-3 xl:text-base 2xl:px-5 2xl:text-xl",
                pathname === item.href && "bg-neutrals-100",
              )}
            >
              {item.label}
            </Typography>
          </NavItem>
        ))}
        <NavItem href="https://www.facebook.com/extremebl/">
          <Facebook className="size-4 xl:size-6" />
        </NavItem>
        <NavItem href="https://www.instagram.com/extreme_bl/">
          <Instagram className="size-4 xl:size-6" />
        </NavItem>
        <Separator orientation="vertical" className="h-5 bg-neutrals-800" />
        <LanguageSelector />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        onClose={handleMobileMenuClose}
      />
    </nav>
  );
};

export default Navbar;
