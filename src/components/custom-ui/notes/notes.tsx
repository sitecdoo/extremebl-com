import Typography from "../typography";

type NotesProps = {
  statment: string;
  text: string;
  intro?: string;
};

const Notes = ({ intro, statment, text }: NotesProps) => {
  return (
    <div className="flex items-center rounded-xl bg-neutrals-100 px-6 py-5">
      <Typography fontWeight="bold" tag="h1">
        <Typography className="inline">{intro}</Typography>
        {statment}
        <Typography className="inline"> {text}</Typography>
      </Typography>
    </div>
  );
};

export default Notes;
