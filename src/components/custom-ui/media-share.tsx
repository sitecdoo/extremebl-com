"use client";

import { Facebook } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MediaShareProps = {
  title: string;
};

const MediaShare = ({ title }: MediaShareProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={`https://www.facebook.com/share.php?u=https://extremebl-com.vercel.app${pathname}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Facebook size="24" />
    </Link>
  );
};

export default MediaShare;
