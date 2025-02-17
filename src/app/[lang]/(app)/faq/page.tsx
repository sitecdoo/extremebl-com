import { HeroBanner } from "@/components/custom-ui/banners";
import RecentBlogWrapper from "@/components/custom-ui/blog/recent-blog-wrapper";
import Questions from "@/components/custom-ui/questions";
import React from "react";
import { Button } from "@/components/ui/button";
import Typography from "@/components/custom-ui/typography";
import InstagramPostsWrapper from "@/components/custom-ui/instagram";
import FAQBannerBlobs from "@/components/custom-ui/blobs/faq";
import { generatePageTitle } from "@/utils/generate-page-title";
import { getRecentPosts } from "@/db/queries";
import { getDictionary } from "@/utils/dictionary";

export async function generateMetadata() {
  return {
    title: generatePageTitle("FAQ"),
  };
}

const FAQPage = async () => {
  const dict = await getDictionary();
  const { docs } = await getRecentPosts();

  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-48 lg:pb-48">
      <FAQBannerBlobs />
      <HeroBanner title="FAQ" img="/faq-banner.jpg" />
      <Questions dict={dict.faq} />
      <InstagramPostsWrapper dict={dict.socialMedia} />
      <div className="space-y-4 text-center lg:space-y-5">
        <Button
          variant="black"
          className="pointer-events-none py-2 lg:px-5 lg:py-2"
        >
          <Typography uppercase>Blog</Typography>
        </Button>
        <RecentBlogWrapper
          posts={docs}
          dict={{ buttons: dict.buttons, global: dict.global }}
        />
      </div>
    </div>
  );
};

export default FAQPage;
