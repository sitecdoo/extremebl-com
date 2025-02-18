import { Dictionary } from "@/utils/dictionary";
import Typography from "../typography";
import ServiceCard from "./serviceCard";

const ServicesSection = ({ dict }: { dict: Dictionary["services"] }) => {
  const servicesData = [
    {
      title: dict.coursesTitle,
      description: dict.coursesDescription,
      image: "/icons/karabiner-icon.svg",
    },
    {
      title: dict.equipmentTitle,
      description: dict.equipmentDescription,
      image: "/icons/helmet-icon.svg",
    },
    {
      title: dict.birthdayTitle,
      description: dict.birthdayDescription,
      image: "/icons/birthday-icon.svg",
    },
    {
      title: dict.teambuildingTitle,
      description: dict.teambuildingDescription,
      image: "/icons/teambuilding-icon.svg",
    },
    {
      title: dict.outdoorTitle,
      description: dict.outdoorDescription,
      image: "/icons/trip-icon.svg",
    },
    {
      title: dict.trainingTitle,
      description: dict.trainingDescription,
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
