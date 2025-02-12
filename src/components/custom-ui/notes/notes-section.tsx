import Typography from "../typography";
import Notes from "./notes";
import notesData from "./notes-data";

const NotesSection = () => {
  return (
    <div className="flex w-full max-w-[41.25rem] flex-col gap-x-16 space-y-4 lg:max-w-[47rem] xl:max-w-[71.5rem] xl:flex-row xl:items-start">
      <Typography tag="h5" variant="h5" fontWeight="bold">
        Napomene:
      </Typography>
      <div className="flex flex-col gap-3">
        {notesData.map((data, index) => (
          <Notes key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default NotesSection;
