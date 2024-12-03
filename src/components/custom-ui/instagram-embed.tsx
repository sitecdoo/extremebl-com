import Image from "next/image";

type InstagramPost = {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url: string;
  permalink: string;
};

type InstagramEmbedProps = {
  posts?: InstagramPost[];
};

const InstagramEmbed = ({ posts }: InstagramEmbedProps) => {
  return (
    <div className="grid h-[22.5rem] grid-cols-2 gap-2 sm:h-[37.188rem] sm:gap-5 lg:h-96 lg:grid-cols-4">
      {posts &&
        posts.map((post: InstagramPost) => (
          <div
            key={post.id}
            className="max-w-44 sm:max-w-72 lg:max-h-96 lg:max-w-96"
          >
            {post.media_type === "IMAGE" ||
            post.media_type === "CAROUSEL_ALBUM" ? (
              <Image
                src={post.media_url}
                alt={post.caption || "Instagram Post"}
                className="rounded-xl lg:rounded-28"
                width={384}
                height={384}
              />
            ) : (
              <video controls className="rounded-xl lg:rounded-28">
                <source src={post.media_url} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
    </div>
  );
};

export default InstagramEmbed;
