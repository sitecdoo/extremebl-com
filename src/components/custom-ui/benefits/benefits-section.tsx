import Typography from "../typography";

type BenefitsSectionProps = {
  title: string;
  children: React.ReactNode;
};

const BenefitsSection = ({ title, children }: BenefitsSectionProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-6 lg:gap-12">
      <Typography
        tag="h2"
        variant="h2"
        fontWeight="bold"
        className="text-center"
      >
        {title}
      </Typography>
      <div className="relative flex w-full justify-center rounded-[16px] bg-neutrals-100 px-0 sm:w-fit sm:px-24 lg:w-full lg:rounded-40 lg:px-0">
        <div className="grid w-fit grid-cols-1 justify-between gap-0 lg:grid-cols-3 lg:py-20 xl:gap-8 2xl:gap-16">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
