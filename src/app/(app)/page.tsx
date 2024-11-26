import Image from "next/image";
import Typography from "../../components/custom-ui/typography";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] gap-16">
      <main className="row-start-2 flex flex-col gap-8">
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
      </main>
    </div>
  );
}
