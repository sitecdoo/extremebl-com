import { Dictionary } from "@/utils/dictionary";
import Typography from "../typography";
import ServiceCard from "./serviceCard";

const ServicesSection = ({ dict }: { dict: Dictionary["services"] }) => {
  const servicesData = [
    {
      title: dict.about[0].title,
      description: dict.about[0].description,
      image: "/icons/karabiner-icon.svg",
    },
    {
      title: dict.about[1].title,
      description: dict.about[1].description,
      image: "/icons/helmet-icon.svg",
    },
    {
      title: dict.about[2].title,
      description: dict.about[2].description,
      image: "/icons/birthday-icon.svg",
    },
    {
      title: dict.about[3].title,
      description: dict.about[3].description,
      image: "/icons/teambuilding-icon.svg",
    },
    {
      title: dict.about[4].title,
      description: dict.about[4].description,
      image: "/icons/trip-icon.svg",
    },
    {
      title: dict.about[5].title,
      description: dict.about[5].description,
      image: "/icons/course-icon.svg",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center gap-6 lg:gap-12">
      <Typography tag="h2" variant="h2" fontWeight="bold">
        {dict.title}
      </Typography>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {servicesData.map((data) => (
          <ServiceCard
            key={data.title}
            title={data.title}
            description={data.description}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
