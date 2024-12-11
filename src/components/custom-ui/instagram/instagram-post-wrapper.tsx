import Image from "next/image";
import InstagramPosts from "./instagram-posts";
import renderError from "./render-error";
import Link from "next/link";
import Typography from "../typography";

const instagramToken = process.env.INSTAGRAM_TOKEN;
const userId = process.env.INSTAGRAM_USER_ID;

const InstagramPostsWrapper = async () => {
  let postsComponent;

  try {
    const data = await fetch(
      `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${instagramToken}&limit=4`,
    );
    if (!data.ok) {
      postsComponent = renderError();
    } else {
      const posts = await data.json();
      postsComponent = <InstagramPosts posts={posts.data} />;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    postsComponent = renderError();
  }
  return (
    <div className="space-y-4 text-center lg:w-full lg:space-y-2">
      <Typography variant="h2" tag="h2" fontWeight="bold">
        Socijalne mreže
      </Typography>
      <div className="space-y-2 self-start lg:space-y-9">
        <Link
          href="https://www.instagram.com/extreme_bl/"
          className="flex w-fit items-center gap-3"
        >
          <Image
            width={150}
            height={150}
            src="/instagram-logo.png"
            alt="Logo"
            className="size-10 rounded-full lg:size-14"
          />
          <Typography className="text-neutrals-600 lg:text-2xl lg:leading-7 lg:text-neutrals-500">
            extremeclimbing
          </Typography>
        </Link>
        {postsComponent}
      </div>
    </div>
  );
};

export default InstagramPostsWrapper;
