import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import { Card } from "@/components/custom-ui/blog";
import { formatDistanceToNow } from "date-fns";
import type { Category, Media } from "@/payload-types";
import SortButton from "@/components/custom-ui/blog/sort-button";
import { HeroBanner } from "@/components/custom-ui/banners";
import { getPageNumbers } from "./utils";
import BlogPagination from "@/components/custom-ui/blog/blog-pagination";
import { notFound } from "next/navigation";

const Blog = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const payload = await getPayload({ config });

  const sortParam =
    (await searchParams).sort === "asc" ? "createdAt" : "-createdAt";

  const postsPerPage = 9;
  const currentPage = Number((await searchParams).page) || 1;

  const getPosts = async () => {
    const posts = await payload.find({
      collection: "posts",
      limit: postsPerPage,
      page: currentPage,
      sort: sortParam,
    });

    return posts;
  };

  const { docs, totalPages } = await getPosts();
  const pageNumbers = getPageNumbers({
    totalPages: totalPages,
    currentPage: currentPage,
  });

  if (docs.length < 1) return notFound();

  return (
    <div className="flex flex-col items-center gap-12 pb-24 sm:pb-48">
      <HeroBanner img="/blog/blog-banner.png" title="Blog" />
      <nav className="flex w-full justify-end">
        <SortButton initialSortOrder="desc" />
      </nav>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {docs.map((post) => {
          const thumbnail = post.thumbnail as Media;
          const categories = post.categories as Category[];
          return (
            <Card
              description={post.description}
              image={thumbnail.url || ""}
              title={post.title}
              time={`${formatDistanceToNow(post.createdAt)} ago`}
              tags={categories.map((category) => category.name)}
              key={post.id}
              slug={post.id}
            />
          );
        })}
      </div>
      {totalPages > 1 && (
        <BlogPagination
          totalPages={totalPages}
          currentPage={currentPage}
          pageNumbers={pageNumbers}
        />
      )}
    </div>
  );
};

export default Blog;
