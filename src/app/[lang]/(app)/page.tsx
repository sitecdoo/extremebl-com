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

export const metadata: Metadata = {
  title: "Extreme",
};

export default async function HomePage() {
  const { docs } = await getRecentPosts();

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
          description="Naše penjanje za odrasle pruža uzbudljivu priliku za sve ljubitelje avanture, bez obzira na prethodno iskustvo. Bilo da želiš poboljšati svoju fizičku kondiciju, savladati nove izazove ili jednostavno uživati u društvu entuzijasta kao što si ti, naši instruktori su tu da ti pruže podršku na svakom koraku."
          yPosition={60}
        >
          <Link href="/adults">
            <Button variant="black" className="w-fit">
              <Typography fontWeight="bold">Saznajte više</Typography>
            </Button>
          </Link>
        </InfoSection>
        <InfoSection
          image="/climbing-for-children.jpg"
          title="Penjanje za djecu"
          description="Penjanje za djecu  je savršen način da mališani razviju svoje motoričke veštine, samopouzdanje i timski duh. Naši programi su prilagođeni različitim uzrastima i nivoima vještina, uz stalni nadzor i podršku iskusnih instruktora. Kroz igru i zabavu, djeca će naučiti osnovne tehnike penjanja, a možda čak i otkriti svoju ljubav prema ovom sportu."
          yPosition={30}
        >
          <Link href="/children">
            <Button variant="yellow" className="w-fit">
              <Typography fontWeight="bold">Saznajte više</Typography>
            </Button>
          </Link>
        </InfoSection>
      </div>
      <TrainingSchedule />
      <div className="hidden" />
      <InfoSection
        image="/birthdays/hero.jpg"
        title="Proslava rođendana"
        description="Proslavite rođendan vašeg djeteta na jedinstven i uzbudljiv način! Naša penjačka sala nudi savršeno okruženje za nezaboravnu rođendansku proslavu uz profesionalne instruktore, sigurnu opremu i zabavu za sve uzraste."
      >
        <Link href="/birthdays">
          <Button variant="blue" className="w-fit">
            <Typography fontWeight="bold">Saznajte više</Typography>
          </Button>
        </Link>
      </InfoSection>
      <InfoSection
        image="/teambuilding/teambuilding-banner.jpg"
        title="Teambuilding"
        description="Naša penjačka sala je idealno mjesto za teambuilding jer nudi jedinstvenu kombinaciju fizičkih i mentalnih izazova koji podstiču timsku saradnju i komunikaciju. Uz to nudimo profesionalne instruktore, sigurnu opremu i neograničen broj ideja kojima ćete uvijek iznenaditi vaš tim."
      >
        <Link href="/teambuilding">
          <Button variant="blue" className="w-fit">
            <Typography fontWeight="bold">Saznajte više</Typography>
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
