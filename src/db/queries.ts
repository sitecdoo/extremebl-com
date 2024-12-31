import { getPayload } from "payload";
import config from "@payload-config";
import { unstable_cache } from "next/cache";
import { cache } from "react";
import { notFound } from "next/navigation";

const getPosts = cache(
  unstable_cache(
    async ({ query }) => {
      const payload = await getPayload({ config });

      const whereClause = query.where?.and?.length
        ? {
            or: query.where.and
              .map((condition: any) => {
                if (condition?.categories?.in) {
                  return condition.categories.in.map((categoryId: number) => ({
                    categories: {
                      equals: categoryId,
                    },
                  }));
                }
                if (condition?.or) {
                  return condition.or;
                }
                return condition;
              })
              .flat()
              .filter(Boolean),
          }
        : undefined;

      const totalCount = await payload.find({
        collection: "posts",
        where: whereClause,
        limit: 0,
      });

      const response = await payload.find({
        collection: "posts",
        pagination: true,
        limit: query.limit || 9,
        page: query.page || 1,
        sort: query.sort || "-createdAt",
        where: whereClause,
        depth: 1,
      });
      return {
        ...response,
        docs: response.docs,
        totalDocs: totalCount.docs.length,
        totalPages: Math.ceil(totalCount.docs.length / (query.limit || 9)),
      };
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
