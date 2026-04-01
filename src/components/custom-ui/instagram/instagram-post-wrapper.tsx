import Image from "next/image";
import InstagramPosts from "./instagram-posts";
import renderError from "./render-error";
import Link from "next/link";
import Typography from "../typography";
import { Dictionary } from "@/utils/dictionary";

const InstagramPostsWrapper = async ({
  dict,
}: {
  dict: Dictionary["socialMedia"];
}) => {
  const limit = 4;
  let postsComponent;

  try {
    const data = await fetch(
      `https://graph.instagram.com/v25.0/${process.env.INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=${limit}&access_token=${process.env.INSTAGRAM_TOKEN}`,
      { next: { revalidate: 3600 } }
    );

    if (!data.ok) {
      postsComponent = renderError(dict.error);
    } else {
      const feed = await data.json();
      const posts = feed.data?.map((post: Record<string, string>) => ({
        id: post.id,
        caption: post.caption,
        mediaType: post.media_type,
        mediaUrl: post.media_url,
        thumbnailUrl: post.thumbnail_url,
        permalink: post.permalink,
      }));
      postsComponent = <InstagramPosts posts={posts} />;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    postsComponent = renderError(dict.error);
  }

  return (
    <div className="space-y-4 text-center lg:w-full lg:space-y-2">
      <Typography variant="h2" tag="h2" fontWeight="bold">
        {dict.title}
      </Typography>
      <div className="space-y-2 self-start lg:space-y-9">
        <Link
          href="https://www.instagram.com/extreme_bl/"
          className="flex w-fit items-center gap-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={150}
            height={150}
            src="/instagram-logo.png"
            alt="Logo"
            className="size-10 rounded-full lg:size-14"
            loading="lazy"
            decoding="sync"
            quality={65}
          />
          <Typography className="text-neutrals-600 lg:text-2xl lg:leading-7 lg:text-neutrals-500">
            extreme_bl
          </Typography>
        </Link>
        {postsComponent}
      </div>
    </div>
  );
};

export default InstagramPostsWrapper;
