import { HeroBanner } from "@/components/custom-ui/banners";
import RecentBlogWrapper from "@/components/custom-ui/blog/recent-blog-wrapper";
import Questions from "@/components/custom-ui/questions";
import { getPayload } from "payload";
import React from "react";
import config from "@payload-config";

const FAQPage = async () => {
  const payload = await getPayload({ config });
  const getPosts = async () => {
    const posts = await payload.find({
      collection: "posts",
      sort: "-createdAt",
      limit: 3,
    });

    return posts;
  };
  const { docs } = await getPosts();
  return (
    <div className="flex w-full flex-col items-center gap-24 pb-24 lg:gap-48 lg:pb-48">
      <HeroBanner title="FAQ" img="/faq-banner.jpg" />
      <Questions />
      <RecentBlogWrapper posts={docs} />
    </div>
  );
};

export default FAQPage;
