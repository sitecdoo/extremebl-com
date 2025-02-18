import InstagramPostsWrapper from "@/components/custom-ui/instagram";
import { BigHeroBanner } from "@/components/custom-ui/banners";
import InfoSection from "@/components/custom-ui/info-section";
import { Button } from "@/components/ui/button";
import TrainingSchedule from "@/components/custom-ui/training-schedule";
import RecentBlogWrapper from "@/components/custom-ui/blog/recent-blog-wrapper";
import Questions from "@/components/custom-ui/questions";
import SmallQuestions from "@/components/custom-ui/small-questions";
import {
  HomeBannerBlobs,
  HomePostsBlobs,
} from "@/components/custom-ui/blobs/home";
import { Metadata } from "next";
import { getRecentPosts } from "@/db/queries";
import Link from "next/link";
import Typography from "@/components/custom-ui/typography";
import { getDictionary } from "@/utils/dictionary";

export const metadata: Metadata = {
  title: "Extreme",
};

export default async function HomePage() {
  const dict = await getDictionary();
  const { docs } = await getRecentPosts();

  console.log(docs);

  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <HomeBannerBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-48">
        <BigHeroBanner
          dict={{ global: dict.global, heroBanner: dict.heroBanner }}
        />
        <SmallQuestions dict={dict.smallQuestions} />
      </div>
      <div className="flex w-full flex-col gap-y-24 lg:gap-y-32">
        <InfoSection
          image="/climbing-for-adults.jpg"
          title={dict.infoSection.homePage.adultsTitle}
          description={dict.infoSection.homePage.adultsDescription}
          yPosition={60}
        >
          <Link href="/odrasli-penjanje">
            <Button variant="black" className="w-fit">
              <Typography fontWeight="bold">{dict.global.learnMore}</Typography>
            </Button>
          </Link>
        </InfoSection>
        <InfoSection
          image="/climbing-for-children.jpg"
          title={dict.infoSection.homePage.childrenTitle}
          description={dict.infoSection.homePage.childrenDescription}
          yPosition={30}
        >
          <Link href="/djeca-penjanje">
            <Button variant="yellow" className="w-fit">
              <Typography fontWeight="bold">{dict.global.learnMore}</Typography>
            </Button>
          </Link>
        </InfoSection>
      </div>
      <TrainingSchedule dict={{ schedule: dict.schedule, days: dict.days }} />
      <div className="hidden" />
      <InfoSection
        image="/birthdays/hero.jpg"
        title={dict.infoSection.homePage.birthdayTitle}
        description={dict.infoSection.homePage.birthdayDescription}
      >
        <Link href="/rodjendani">
          <Button variant="blue" className="w-fit">
            <Typography fontWeight="bold">{dict.global.learnMore}</Typography>
          </Button>
        </Link>
      </InfoSection>
      <InfoSection
        image="/teambuilding/teambuilding-banner.jpg"
        title={dict.infoSection.homePage.teambuildingTitle}
        description={dict.infoSection.homePage.teambuildingDescription}
      >
        <Link href="/teambuilding">
          <Button variant="blue" className="w-fit">
            <Typography fontWeight="bold">{dict.global.learnMore}</Typography>
          </Button>
        </Link>
      </InfoSection>
      <div className="flex flex-col items-center gap-4 lg:gap-5">
        <Button
          variant="black"
          className="pointer-events-none py-2 lg:px-5 lg:py-2"
        >
          <Typography uppercase>Blog</Typography>
        </Button>
        <RecentBlogWrapper
          posts={docs}
          dict={{ global: dict.global, blogPost: dict.blogPost }}
        >
          <HomePostsBlobs />
        </RecentBlogWrapper>
      </div>
      <InstagramPostsWrapper dict={dict.socialMedia} />
      <Questions dict={dict.faq} />
    </div>
  );
}
