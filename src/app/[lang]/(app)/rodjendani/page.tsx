import { HeroBanner } from "@/components/custom-ui/banners";
import InfoSection from "@/components/custom-ui/info-section";
import Masonry from "@/components/custom-ui/masonry";
import { PackagesSection } from "@/components/custom-ui/packages";
import React from "react";
import { TestimonialSection } from "@/components/custom-ui/testimonial";
import Header from "@/components/custom-ui/header";
import {
  BirthdaysBannerBlobs,
  BirthdaysPackagesBlobs,
  BirthdaysTestemonialBlobs,
} from "@/components/custom-ui/blobs/birthdays";
import { masonryImages } from "@/content/birthdays";
import { generatePageTitle } from "@/utils/generate-page-title";
import NotesSection from "@/components/custom-ui/notes";
import { getDictionary } from "@/utils/dictionary";

export async function generateMetadata() {
  const dict = await getDictionary();
  return {
    title: generatePageTitle(dict.navigation.birthdays),
  };
}

const Birthdays = async () => {
  const dict = await getDictionary();

  const infoSectionData = [
    {
      image: "/birthdays/info-section-1.jpg",
      title: dict.infoSection.birthdays.instructorsTitle,
      description: dict.infoSection.birthdays.instructorsDescription,
      xPosition: 60,
      yPosition: 50,
    },
    {
      image: "/birthdays/info-section-2.jpg",
      title: dict.infoSection.birthdays.saftyTitle,
      description: dict.infoSection.birthdays.saftyDescription,
      xPosition: 50,
      yPosition: 15,
    },
    {
      image: "/birthdays/info-section-3.jpg",
      title: dict.infoSection.birthdays.funTitle,
      description: dict.infoSection.birthdays.funDescription,
      xPosition: 60,
      yPosition: 50,
    },
  ];

  return (
    <div className="relative flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <BirthdaysBannerBlobs />
      <div className="flex w-full flex-col items-center gap-24 lg:gap-44">
        <HeroBanner
          img="/birthdays/hero.jpg"
          title={dict.navigation.birthdays}
        />
        <Header text={dict.birthdays.header} />
      </div>
      <div className="flex w-full flex-col gap-y-24 lg:gap-y-32">
        {infoSectionData.map((info, index) => (
          <InfoSection
            key={index}
            image={info.image}
            title={info.title}
            description={info.description}
            xPosition={info.xPosition}
            yPosition={info.yPosition}
          />
        ))}
      </div>
      <div className="relative space-y-9 lg:space-y-16">
        <PackagesSection dict={dict.packages} />
        <NotesSection dict={dict.notes} />
        <BirthdaysPackagesBlobs />
      </div>
      <Masonry images={masonryImages} />
      <TestimonialSection
        description={dict.birthdays.testimonial}
        name="Ognjenka Jovičić"
        image="/testemonial/ognjenka-jovicic.png"
        text={dict.global.contactUs}
      >
        <BirthdaysTestemonialBlobs />
      </TestimonialSection>
    </div>
  );
};

export default Birthdays;
