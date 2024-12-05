import InstagramPostsWrapper from "@/components/custom-ui/instagram";

export default async function HomePage() {
  return (
    <div className="flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <InstagramPostsWrapper />
    </div>
  );
}
