import Typography from "../typography";

const Pill = ({ name }: { name: string }) => {
  return (
    <div className="rounded-full bg-neutrals-200 px-2 py-1 lg:py-[0.125rem]">
      <Typography variant="caption" uppercase>
        {name}
      </Typography>
    </div>
  );
};

export default Pill;
