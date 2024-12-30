import { getPayload } from "payload";
import config from "@payload-config";
import { unstable_cache } from "next/cache";
import { cache } from "react";
import { notFound } from "next/navigation";

type Query = {
  query: {
    limit: number;
    page: number;
    sort: string;
    where: {};
  };
};

const getPosts = cache(
  unstable_cache(
    async ({ query }: Query) => {
      const payload = await getPayload({ config });
      return await payload.find({
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
    },
    ["posts"],
    { revalidate: 3600, tags: ["posts"] },
  ),
);

const getPost = cache(
  unstable_cache(
    async (id: string) => {
      try {
        const payload = await getPayload({ config });
        const post = await payload.findByID({
          collection: "posts",
          id: id,
        });
        return post;
      } catch (error) {
        notFound();
      }
    },
    ["post"],
    { revalidate: 3600, tags: ["post"] },
  ),
);

const getRecentPosts = cache(
  unstable_cache(
    async () => {
      const payload = await getPayload({ config });
      return await payload.find({
        collection: "posts",
        sort: "-createdAt",
        limit: 3,
      });
    },
    ["recent-posts"],
    { revalidate: 3600, tags: ["recent-posts"] },
  ),
);

const getCategories = cache(
  unstable_cache(
    async () => {
      const payload = await getPayload({ config });
      return await payload.find({
        collection: "categories",
        select: {
          id: true,
          name: true,
        },
      });
    },
    ["categories"],
    { revalidate: 3600, tags: ["categories"] },
  ),
);

export { getPosts, getPost, getRecentPosts, getCategories };
