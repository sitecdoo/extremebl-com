import { Button } from "@/components/ui/button";
import Typography from "../../typography";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Category, Media, Post } from "@/payload-types";
import SmallCard from "./small-card";

interface RecentBlogWrapperProps {
  posts: Pick<
    Post,
    "id" | "title" | "description" | "thumbnail" | "createdAt" | "categories"
  >[];
}

const RecentBlogWrapper = ({ posts }: RecentBlogWrapperProps) => {
  return (
    <div className="flex flex-col items-center gap-2 lg:gap-4">
      <div className="flex flex-col items-center gap-4 lg:gap-5">
        {/* For future use */}
        {/* <Button
          variant="black"
          className="pointer-events-none py-2 lg:px-5 lg:py-2"
        >
          <Typography>Blog</Typography>
        </Button> */}
        <Typography variant="h2" tag="h2" fontWeight="bold">
          Najnovije objave
        </Typography>
      </div>
      <div className="mt-2 grid grid-cols-1 justify-items-center gap-3 rounded-xl bg-neutrals-100 p-3 md:grid-cols-2 md:gap-5 md:p-10 lg:mt-8 lg:grid-cols-3 lg:rounded-40 lg:px-5 xl:gap-9 xl:px-10">
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
      </div>
      <Link href="/blog" className="self-end">
        <Button variant="ghost" className="flex items-center gap-x-2">
          <Typography fontWeight="bold">Vidi sve postove</Typography>
          <ArrowRight className="size-5 text-neutrals-900" />
        </Button>
      </Link>
    </div>
  );
};

export default RecentBlogWrapper;
