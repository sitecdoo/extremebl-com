import Image from "next/image";

type InstagramPost = {
  id: string;
  caption: string;
  mediaType: string;
  mediaUrl: string;
  thumbnailUrl: string;
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
            <Image
              src={
                post.mediaType === "VIDEO" ? post.thumbnailUrl : post.mediaUrl
              }
              alt={post.caption || "Instagram Post"}
              className="h-full rounded-xl lg:rounded-28"
              width={384}
              height={384}
              loading="lazy"
              decoding="sync"
              quality={65}
            />
          </div>
        ))}
    </div>
  );
};

export default InstagramPosts;
