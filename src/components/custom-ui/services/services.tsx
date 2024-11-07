import ServiceCard from "./serviceCard";
import { servicesData } from "./services-data";

const Services = () => {
  return (
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
  );
};

export default Services;
