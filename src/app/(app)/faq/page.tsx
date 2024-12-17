import { HeroBanner } from "@/components/custom-ui/banners";
import RecentBlogWrapper from "@/components/custom-ui/blog/recent-blog-wrapper";
import Questions from "@/components/custom-ui/questions";
import { getPayload } from "payload";
import React from "react";
import config from "@payload-config";
import { Button } from "@/components/ui/button";
import Typography from "@/components/custom-ui/typography";
import InstagramPostsWrapper from "@/components/custom-ui/instagram";
import FAQBannerBlobs from "@/components/custom-ui/blobs/faq";

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
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-48 lg:pb-48">
      <FAQBannerBlobs />
      <HeroBanner title="FAQ" img="/faq-banner.jpg" />
      <Questions />
      <InstagramPostsWrapper />
      <div className="space-y-4 text-center lg:space-y-5">
        <Button variant="black" className="py-2 lg:px-5 lg:py-2">
          <Typography uppercase>Blog</Typography>
        </Button>
        <RecentBlogWrapper posts={docs} />
      </div>
    </div>
  );
};

export default FAQPage;
