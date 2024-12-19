"use client";

import { Facebook } from "lucide-react";
import { FacebookShareButton } from "next-share";
import { usePathname } from "next/navigation";

type MediaShareProps = {
  title: string;
};

const MediaShare = ({ title }: MediaShareProps) => {
  const pathname = usePathname();

  return (
    <FacebookShareButton
      url={`https://extremebl-com.vercel.app${pathname}`}
      quote={title}
    >
      <Facebook size="24" />
    </FacebookShareButton>
  );
};

export default MediaShare;
