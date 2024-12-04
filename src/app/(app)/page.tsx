import InstagramPosts from "@/components/custom-ui/instagram-posts";
import Typography from "@/components/custom-ui/typography";
import Image from "next/image";
import Link from "next/link";

const instagramToken = process.env.INSTAGRAM_TOKEN;
const userId = process.env.INSTAGRAM_USER_ID;

export default async function HomePage() {
  const renderError = () => (
    <Typography variant="h4" className="text-center">
      Failed to load posts. Please try again later.
    </Typography>
  );

  const InstagramPostsWrapper = async () => {
    try {
      const data = await fetch(
        `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${instagramToken}&limit=4`,
      );
      if (!data.ok) {
        return renderError();
      }
      const posts = await data.json();
      return <InstagramPosts posts={posts.data} />;
    } catch (error) {
      console.error("Fetch error:", error);
      return renderError();
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-24 pb-24 lg:gap-64 lg:pb-64">
      <div className="space-y-4 text-center lg:space-y-2">
        <Typography variant="h2" tag="h2" fontWeight="bold">
          Socijalne mreže
        </Typography>
        <div className="space-y-2 self-start lg:space-y-9">
          <Link
            href="https://www.instagram.com/explore/locations/397065856/penjacki-klub-extreme-climbing-club-extreme/"
            className="flex w-fit items-center gap-3"
          >
            <Image
              width={150}
              height={150}
              src="/instagram-logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-full lg:h-14 lg:w-14"
            />
            <Typography className="text-neutrals-600 lg:text-2xl lg:leading-7 lg:text-neutrals-500">
              extremeclimbing
            </Typography>
          </Link>
          <InstagramPostsWrapper />
        </div>
      </div>
    </div>
  );
}
