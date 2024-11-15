import Typography from "../../typography";
import SmallCard from "./small-card";

const RecentBlogWrapper = () => {
  return (
    <div className="flex flex-col gap-4">
      <button>Blog</button>
      <Typography variant="h2" tag="h2" fontWeight="bold">
        Najnovije objave
      </Typography>
      <div className="grid grid-cols-1 justify-items-center gap-3 rounded-xl bg-neutrals-200 p-3 md:grid-cols-2 md:gap-5 md:p-10 lg:grid-cols-3 lg:rounded-40 lg:px-5 xl:gap-9 xl:px-10">
        {Array.from({ length: 3 }).map((_, index) => (
          <SmallCard
            key={index}
            image={"/card/basic-techniques.jpg"}
            time="2 days ago"
            title="Osnovne tehnike penjanja za pocetnike"
            description="U ovom članku istražujemo osnovne tehnike penjanja koje svaki početnik treba znati. Naučite kako se pravilno penjati, izabrati opremu i ostati siguran na stijeni."
            tags={["Penjanje", "Boulder", "fleksibilnost"]}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentBlogWrapper;
