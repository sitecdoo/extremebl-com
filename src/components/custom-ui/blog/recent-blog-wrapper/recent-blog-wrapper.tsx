import { Button } from "@/components/ui/button";
import Typography from "../../typography";
import SmallCard from "./small-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const RecentBlogWrapper = () => {
  return (
    <div className="flex flex-col items-center gap-2 lg:gap-4">
      <div className="flex flex-col items-center gap-4 lg:gap-5">
        <Button
          variant="black"
          className="pointer-events-none py-2 lg:px-5 lg:py-2"
        >
          <Typography>Blog</Typography>
        </Button>
        <Typography variant="h2" tag="h2" fontWeight="bold">
          Najnovije objave
        </Typography>
      </div>
      <div className="mt-2 grid grid-cols-1 justify-items-center gap-3 rounded-xl bg-neutrals-100 p-3 md:grid-cols-2 md:gap-5 md:p-10 lg:mt-8 lg:grid-cols-3 lg:rounded-40 lg:px-5 xl:gap-9 xl:px-10">
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
      <Link href="/blog" className="self-end">
        <Button variant="ghost" className="flex items-center gap-x-2">
          <Typography fontWeight="bold">Vidi sve postove</Typography>
          <ArrowRight className="size-5 text-neutrals-900" />
        </Button>
      </Link>
    </div>
  );
};

export default RecentBlogWrapper;
