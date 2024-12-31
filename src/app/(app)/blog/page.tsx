import React from "react";
import { Card } from "@/components/custom-ui/blog";
import { formatDistanceToNow } from "date-fns";
import type { Category, Media } from "@/payload-types";
import SortButton from "@/components/custom-ui/blog/sort-button";
import { HeroBanner } from "@/components/custom-ui/banners";
import { getPageNumbers } from "./utils";
import BlogPagination from "@/components/custom-ui/blog/blog-pagination";
import { SearchFilter } from "@/components/custom-ui/blog/search-filter";
import FilterWrapper from "@/components/custom-ui/blog/filter-wrapper";
import BlogBannerBlobs from "@/components/custom-ui/blobs/blog";
import { generatePageTitle } from "@/utils/generate-page-title";
import { getCategories, getPosts } from "@/db/queries";
import EmptyState from "@/components/custom-ui/empty-state";

export async function generateMetadata() {
  return {
    title: generatePageTitle("Blog"),
  };
}

const Blog = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const params = await searchParams;

  const sortParam = params.sort === "asc" ? "createdAt" : "-createdAt";
  const searchParam = params.search || "";
  const categoryIds = params.categoryIds || "";
  const currentPage = Number(params.page) || 1;

  const postsPerPage = 9;

  const searchCondition = searchParam
    ? {
        or: [
          {
            title: {
              like: searchParam,
            },
          },
          {
            description: {
              like: searchParam,
            },
          },
        ],
      }
    : null;

  const categoryCondition = categoryIds
    ? {
        categories: {
          in: String(categoryIds)
            .split(",")
            .map((id) => Number(id.trim())),
        },
      }
    : null;

  const query = {
    page: currentPage,
    sort: sortParam,
    limit: postsPerPage,
    where: {},
  };

  if (searchCondition || categoryCondition) {
    query.where = {
      and: [searchCondition, categoryCondition].filter(Boolean),
    };
  }

  const [postsResponse, categoriesResponse] = await Promise.all([
    getPosts({ query }),
    getCategories(),
  ]);

  const { docs, totalPages } = postsResponse;
  const categories = categoriesResponse.docs;

  const pageNumbers = getPageNumbers({
    totalPages: totalPages,
    currentPage: currentPage,
  });

  return (
    <div className="relative flex w-full flex-col items-center gap-12 pb-24 sm:pb-48">
      <BlogBannerBlobs />
      <HeroBanner img="/blog/blog-banner.png" title="Blog" />
      <nav
        id="scroll-to-post"
        className="flex w-full scroll-m-5 flex-wrap items-center justify-between gap-4 sm:flex-nowrap"
      >
        <div className="w-full max-w-full">
          <SearchFilter placeholder="Search..." />
        </div>
        <div className="flex w-full gap-2 sm:w-auto">
          <FilterWrapper filterOptions={categories} />
          <SortButton initialSortOrder="desc" />
        </div>
      </nav>
      {docs.length === 0 ? (
        <EmptyState />
      ) : (
        <>
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
          <BlogPagination
            totalPages={totalPages}
            currentPage={currentPage}
            pageNumbers={pageNumbers}
          />
        </>
      )}
    </div>
  );
};

export default Blog;
