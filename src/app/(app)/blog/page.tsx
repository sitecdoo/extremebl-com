import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import { Card } from "@/components/custom-ui/blog";
import { formatDistanceToNow } from "date-fns";
import type { Category, Media } from "@/payload-types";

const Blog = async () => {
  const payload = await getPayload({ config });

  const getPosts = async () => {
    const posts = await payload.find({
      collection: "posts",
    });

    return posts;
  };
  const { docs } = await getPosts();

  return (
    <div className="grid grid-cols-1 gap-5 pb-24 sm:grid-cols-2 sm:pb-48 xl:grid-cols-3">
      {docs.map((post, index) => {
        const thumbnail = post.thumbnail as Media;
        const categories = post.categories as Category[];
        return (
          <Card
            description={post.description}
            image={thumbnail.url || ""}
            title={post.title}
            time={`${formatDistanceToNow(post.createdAt)} ago`}
            tags={categories.map((category) => category.name)}
            key={index}
            slug={post.id}
          />
        );
      })}
    </div>
  );
};

export default Blog;
