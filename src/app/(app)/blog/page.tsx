import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import { Card } from "@/components/custom-ui/blog";

const Blog = async () => {
  const payload = await getPayload({ config });

  const getPosts = async () => {
    const posts = await payload.find({
      collection: "posts",
    });

    return posts;
  };
  const { docs } = await getPosts();

  console.log(docs);

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {docs.map((post, index) => (
        <Card
          description={post.description}
          image={post.thumbnail.url}
          title={post.title}
          time={post.createdAt}
          tags={post.categories.map((catName) => catName.name)}
          key={index}
          slug={post.id}
        />
      ))}
    </div>
  );
};

export default Blog;
