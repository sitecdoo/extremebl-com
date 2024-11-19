import Typography from "../typography";
import ServiceCard from "./serviceCard";
import { servicesData } from "./services-data";

const ServicesSection = () => {
  return (
    <div className="flex w-full flex-col items-center gap-6 lg:gap-12">
      <Typography tag="h2" variant="h2" fontWeight="bold">
        Nudimo usluge
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
