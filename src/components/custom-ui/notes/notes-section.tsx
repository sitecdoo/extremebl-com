import { Dictionary } from "@/utils/dictionary";
import Typography from "../typography";
import Notes from "./notes";

const NotesSection = ({ dict }: { dict: Dictionary["notes"] }) => {
  const data = [
    {
      statment: dict.traditional,
      text: dict.traditionalText,
    },
    {
      statment: dict.noCafe,
      text: dict.noCafeText,
    },
    {
      statment: dict.noFridge,
      text: dict.noFridgeText,
    },
    {
      intro: dict.noShoes,
      statment: dict.cleanShoes,
      text: dict.warnning,
    },
  ];

  return (
    <div className="flex w-full max-w-[41.25rem] flex-col gap-x-16 space-y-4 lg:max-w-[47rem] xl:max-w-[71.5rem] xl:flex-row xl:items-start">
      <Typography tag="h5" variant="h5" fontWeight="bold">
        {dict.title}
      </Typography>
      <div className="flex flex-col gap-3">
        {data.map((data, index) => (
          <Notes key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default NotesSection;
