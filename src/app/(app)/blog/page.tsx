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
import { SearchFilter } from "@/components/custom-ui/blog/search-filter";
import FilterWrapper from "@/components/custom-ui/blog/filter-wrapper";
import BlogBannerBlobs from "@/components/custom-ui/blobs/blog";
import { generatePageTitle } from "@/utils/generate-page-title";

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
  const [payload, params] = await Promise.all([
    getPayload({ config }),
    searchParams,
  ]);

  const sortParam = params.sort === "asc" ? "createdAt" : "-createdAt";
  const searchParam = params.search || "";
  const categoryIds = params.categoryIds || "";
  const currentPage = Number(params.page) || 1;

  const postsPerPage = 9;

  const query = {
    limit: postsPerPage,
    page: currentPage,
    sort: sortParam,
    where: {},
  };

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
        or: String(categoryIds)
          .split(",")
          .map((id) => id.trim())
          .map((id) => ({
            categories: {
              contains: id,
            },
          })),
      }
    : null;

  if (searchCondition || categoryCondition) {
    query.where = {
      and: [searchCondition, categoryCondition].filter(Boolean),
    };
  }

  const getPosts = async () => {
    const posts = await payload.find({
      collection: "posts",
      select: {
        createdAt: true,
        title: true,
        description: true,
        thumbnail: true,
        categories: true,
      },
      ...query,
    });

    return posts;
  };

  const getCategories = async () => {
    const categories = await payload.find({
      collection: "categories",
      select: {
        id: true,
        name: true,
      },
    });
    return categories;
  };

  const [postsResponse, categoriesResponse] = await Promise.all([
    getPosts(),
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
      <nav className="flex w-full flex-wrap items-center justify-between gap-4 sm:flex-nowrap">
        <div className="w-full max-w-full">
          <SearchFilter placeholder="Search..." />
        </div>
        <div className="flex w-full gap-2 sm:w-auto">
          <FilterWrapper filterOptions={categories} />
          <SortButton initialSortOrder="desc" />
        </div>
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
      <BlogPagination
        totalPages={totalPages}
        currentPage={currentPage}
        pageNumbers={pageNumbers}
      />
    </div>
  );
};

export default Blog;
