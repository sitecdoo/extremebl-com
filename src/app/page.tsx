import Image from "next/image";
import Typography from "../components/custom-ui/typography";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div>
          <Typography variant="body">This text uses open sans font.</Typography>
          <Typography variant="h5">
            This text uses league spartan font.
          </Typography>
        </div>
        <Button variant="black" size="regular">
          Black Regular
        </Button>
        <Button variant="yellow" size="small">
          Yellow Small
        </Button>
        <Button variant="blue" size="xsmall">
          Blue XSmall
        </Button>
        <Button variant="ghost">Ghost</Button>
      </main>
    </div>
  );
}
