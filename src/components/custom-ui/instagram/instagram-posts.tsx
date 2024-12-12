import Image from "next/image";

type InstagramPost = {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url: string;
  permalink: string;
};

type InstagramPostsProps = {
  posts?: InstagramPost[];
};

const InstagramPosts = ({ posts }: InstagramPostsProps) => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-5 lg:grid-cols-4">
      {posts &&
        posts.map((post) => (
          <div
            key={post.id}
            className="h-44 max-w-44 sm:h-72 sm:max-w-72 lg:h-full lg:max-h-96 lg:max-w-96"
          >
            {post.media_type === "IMAGE" ||
            post.media_type === "CAROUSEL_ALBUM" ? (
              <Image
                src={post.media_url}
                alt={post.caption || "Instagram Post"}
                className="h-full rounded-xl lg:rounded-28"
                width={384}
                height={384}
                priority
              />
            ) : (
              <video controls className="h-full rounded-xl lg:rounded-28">
                <source src={post.media_url} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
    </div>
  );
};

export default InstagramPosts;
