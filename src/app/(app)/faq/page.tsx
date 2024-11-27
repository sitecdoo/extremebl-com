import { HeroBanner } from "@/components/custom-ui/banners";
import RecentBlogWrapper from "@/components/custom-ui/blog/recent-blog-wrapper";
import Questions from "@/components/custom-ui/questions";
import React from "react";

const FAQPage = () => {
  return (
    <div className="flex w-full flex-col items-center gap-24 pb-24 lg:gap-48 lg:pb-48">
      <HeroBanner title="FAQ" img="/faq-banner.jpg" />
      <Questions />
      <RecentBlogWrapper />
    </div>
  );
};

export default FAQPage;
