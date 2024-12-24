import InstagramPostsWrapper from "@/components/custom-ui/instagram";
import Typography from "../../components/custom-ui/typography";
import { BigHeroBanner } from "@/components/custom-ui/banners";
import InfoSection from "@/components/custom-ui/info-section";
import { Button } from "@/components/ui/button";
import TrainingSchedule from "@/components/custom-ui/training-schedule";
import RecentBlogWrapper from "@/components/custom-ui/blog/recent-blog-wrapper";
import Questions from "@/components/custom-ui/questions";
import SmallQuestions from "@/components/custom-ui/small-questions";
import { getPayload } from "payload";
import config from "@payload-config";
import {
  HomeBannerBlobs,
  HomePostsBlobs,
} from "@/components/custom-ui/blobs/home";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Extreme",
};

export default async function HomePage() {
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
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <HomeBannerBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-48">
        <BigHeroBanner />
        <SmallQuestions />
      </div>
      <div className="flex w-full flex-col gap-y-24 lg:gap-y-32">
        <InfoSection
          image="/climbing-for-adults.jpg"
          title="Penjanje za odrasle"
          description="Naše penjanje za odrasle pruža uzbudljivu priliku za sve ljubitelje avanture, bez obzira na prethodno iskustvo. Bilo da želite poboljšati svoju fizičku kondiciju, savladati nove izazove ili jednostavno uživati u društvu entuzijasta kao što ste vi, naši instruktori su tu da vam pruže podršku na svakom koraku."
        >
          <Link href="/adults">
            <Button variant="black" className="w-fit">
              <Typography fontWeight="bold">Penjanje za odrasle</Typography>
            </Button>
          </Link>
        </InfoSection>
        <InfoSection
          image="/climbing-for-children.jpg"
          title="Penjanje za djecu"
          description="Penjanje za djecu  je savršen način da mališani razviju svoje motoričke veštine, samopouzdanje i timski duh. Naši programi su prilagođeni različitim uzrastima i nivoima veština, uz stalni nadzor i podršku iskusnih instruktora. Kroz igru i zabavu, deca će naučiti osnovne tehnike penjanja, a možda čak i otkriti svoju ljubav prema ovom sportu."
        >
          <Link href="/children">
            <Button variant="yellow" className="w-fit">
              <Typography fontWeight="bold">Penjanje za djecu</Typography>
            </Button>
          </Link>
        </InfoSection>
      </div>
      <TrainingSchedule />
      <div className="hidden" />
      <InfoSection
        image="/birthdays/hero.jpg"
        title="Proslava rodjendana"
        description="Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na fizičku snagu, tehniku i izdržljivost kako bi savladali različite penjačke rute. Ova aktivnost uključuje korištenje sigurnosn"
      >
        <Link href="/birthdays#packages">
          <Button variant="blue" className="w-fit">
            <Typography fontWeight="bold">Rezerviši termin</Typography>
          </Button>
        </Link>
      </InfoSection>
      <InfoSection
        image="/teambuilding/teambuilding-banner.jpg"
        title="Teambuilding"
        description="Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na fizičku snagu, tehniku i izdržljivost kako bi savladali različite penjačke rute. Ova aktivnost uključuje korištenje sigurnosn"
      >
        <Link href="/teambuilding#packages">
          <Button variant="blue" className="w-fit">
            <Typography fontWeight="bold">Rezerviši termin</Typography>
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
        <RecentBlogWrapper posts={docs}>
          <HomePostsBlobs />
        </RecentBlogWrapper>
      </div>
      <InstagramPostsWrapper />
      <Questions />
    </div>
  );
}
