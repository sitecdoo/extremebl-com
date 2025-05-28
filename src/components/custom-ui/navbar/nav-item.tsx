"use client";

import Link from "next/link";
import Typography from "../typography";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavItem = ({ href, name }: { href: string; name: string }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className="rounded-60 text-neutrals-800 hover:bg-neutrals-75"
      prefetch
    >
      <Typography
        className={cn(
          "rounded-60 px-3 py-2 text-base lg:text-base xl:text-base 2xl:px-5 2xl:text-xl",
          (`/${pathname.split("/")[2]}` === href ||
            (href === "/" && `${pathname.split("/")[2]}` == "undefined")) &&
            "bg-neutrals-100",
        )}
      >
        {name}
      </Typography>
    </Link>
  );
};

export default NavItem;
