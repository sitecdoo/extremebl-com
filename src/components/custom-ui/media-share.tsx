"use client";

import { Facebook, Linkedin } from "lucide-react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";

type MediaShareProps = {
  id: string;
};

const MediaShare = ({ id }: MediaShareProps) => {
  return (
    <div className="flex items-center gap-4">
      <FacebookShareButton url={`https://extremebl-com.vercel.app/blog/${id}`}>
        <Facebook size="24" />
      </FacebookShareButton>
      <LinkedinShareButton url={`https://extremebl-com.vercel.app/blog/${id}`}>
        <Linkedin size="24" />
      </LinkedinShareButton>
      <TwitterShareButton url={`https://extremebl-com.vercel.app/blog/${id}`}>
        <TwitterIcon size="24" borderRadius={8} />
      </TwitterShareButton>
    </div>
  );
};

export default MediaShare;
