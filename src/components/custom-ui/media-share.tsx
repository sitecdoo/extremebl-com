"use client";

import { Facebook } from "lucide-react";
import { FacebookShareButton } from "next-share";

type MediaShareProps = {
  id: string;
  title: string;
};

const MediaShare = ({ id, title }: MediaShareProps) => {
  return (
    <FacebookShareButton
      url={`https://extremebl-com.vercel.app/blog/${id}}`}
      quote={title}
    >
      <Facebook size="24" />
    </FacebookShareButton>
  );
};

export default MediaShare;
