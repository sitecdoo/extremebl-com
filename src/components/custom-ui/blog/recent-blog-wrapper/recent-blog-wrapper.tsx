import Typography from "../../typography";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Category, Media, Post } from "@/payload-types";
import SmallCard from "./small-card";
import { PropsWithChildren } from "react";
import ArrowButton from "../../arrow-button";
import { Dictionary } from "@/utils/dictionary";

type RecentBlogWrapperProps = PropsWithChildren<{
  posts: Pick<
    Post,
    "id" | "title" | "description" | "thumbnail" | "createdAt" | "categories"
  >[];
  dict: Pick<Dictionary, "buttons" | "global">;
}>;

const RecentBlogWrapper = ({
  posts,
  children,
  dict,
}: RecentBlogWrapperProps) => {
  return (
    <div className="flex flex-col items-center gap-2 lg:gap-4">
      <div className="flex flex-col items-center gap-4 lg:gap-5">
        <Typography variant="h2" tag="h2" fontWeight="bold">
          {dict.global.latestPosts}
        </Typography>
      </div>
      <div className="relative mt-2 grid grid-cols-1 justify-items-center gap-3 rounded-xl bg-neutrals-100 p-3 md:grid-cols-2 md:gap-5 md:p-10 lg:mt-8 lg:grid-cols-3 lg:rounded-40 lg:px-5 xl:gap-9 xl:px-10">
        {posts.map((post, index) => {
          const thumbnail = post.thumbnail as Media;
          const categories = post.categories as Category[];
          return (
            <SmallCard
              key={index}
              image={thumbnail.url || ""}
              description={post.description}
              title={post.title}
              time={`${formatDistanceToNow(post.createdAt)} ago`}
              tags={categories.map((category) => category.name)}
              slug={post.id}
            />
          );
        })}
        {children}
      </div>
      <Link href="/blog" className="self-end">
        <ArrowButton dict={dict.buttons} />
      </Link>
    </div>
  );
};

export default RecentBlogWrapper;
