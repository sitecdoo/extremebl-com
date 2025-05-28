import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Typography from "@/components/custom-ui/typography";
import { HeroBanner } from "@/components/custom-ui/banners";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import Pill from "@/components/custom-ui/blog/pill";
import RecentBlogWrapper from "@/components/custom-ui/blog/recent-blog-wrapper";
import { Author, Category, Media } from "@/payload-types";
import PostBannerBlobs from "@/components/custom-ui/blobs/post";
import { generatePageTitle } from "@/utils/generate-page-title";
import MediaShare from "@/components/custom-ui/media-share";
import { getPost, getRecentPosts } from "@/db/queries";
import { getDictionary } from "@/utils/dictionary";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const [{ id }, data] = await Promise.all([params, getPost(params.id)]);
  const thumbnail = data.thumbnail as Media;

  return {
    title: generatePageTitle(data.title),
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: thumbnail.url,
          width: 1200,
          height: 630,
          alt: thumbnail.alt || data.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    sort: "-createdAt",
    limit: 20,
  });

  return docs.map((post) => ({
    id: String(post.id),
  }));
}

export const revalidate = 3600;

const BlogPost = async ({ params }: BlogPostPageProps) => {
  const [{ id }, post, { docs }, dict] = await Promise.all([
    params,
    getPost(params.id),
    getRecentPosts(),
    getDictionary(),
  ]);

  if (!post) {
    notFound();
  }
  const thumbnail = post.thumbnail as Media;
  const author = post.author as Author;
  const categories = post.categories as Category[];

  return (
    <div className="relative flex w-full flex-col items-center justify-center pb-24 sm:pb-48">
      <PostBannerBlobs />
      <HeroBanner img={thumbnail.url || ""} title={post.title} />
      <div className="flex max-w-[67.625rem] flex-col justify-center text-2xl">
        <div className="flex flex-col items-center justify-center gap-2 pb-12 pt-24 text-neutral-600 sm:flex-row sm:gap-9 sm:pb-16 sm:pt-44">
          <div className="flex">
            <Typography variant="body-sm" fontWeight="bold">
              {dict.blogPost.author}:{" "}
              <span className="font-normal"> {author.name}</span>
            </Typography>
          </div>
          <div className="flex">
            <Typography variant="body-sm" fontWeight="bold">
              {dict.blogPost.date}:
              <span className="font-normal">
                {" "}
                {format(post.createdAt, "dd.MM.yyyy")}
              </span>
            </Typography>
          </div>
        </div>
        <Typography className="pb-24 text-center text-base italic text-neutral-800 sm:pb-48 sm:text-2xl sm:leading-9">
          {post.description}
        </Typography>
        <RichText
          data={post.content as SerializedEditorState}
          converters={({ defaultConverters }) => ({
            ...defaultConverters,
            // Basic text elements
            paragraph: ({ node, nodesToJSX }) => {
              const children = nodesToJSX({ nodes: node.children });
              return (
                <Typography
                  variant="body"
                  className="mb-12 text-neutrals-800 sm:mb-24"
                >
                  {children}
                </Typography>
              );
            },
            // Headings
            heading: ({ node, nodesToJSX }) => {
              const children = nodesToJSX({ nodes: node.children });
              const tag = node.tag;
              const variant = node.tag as "h1" | "h2" | "h3" | "h4" | "h5";

              return (
                <Typography
                  variant={variant}
                  tag={tag}
                  fontWeight="bold"
                  className="mb-7 text-neutrals-800"
                >
                  {children}
                </Typography>
              );
            },
            link: ({ node, nodesToJSX }) => {
              const children = nodesToJSX({ nodes: node.children });

              return (
                <Link href={node.fields.url} className="text-blue-800">
                  {children}
                </Link>
              );
            },
            // Lists
            list: ({ node, nodesToJSX }) => {
              const children = nodesToJSX({ nodes: node.children });
              const ListTag = node.listType === "number" ? "ol" : "ul";

              return (
                <ListTag className="-mt-8 mb-12 ml-6 list-disc text-neutrals-800 sm:-mt-20 sm:mb-24">
                  {children}
                </ListTag>
              );
            },
            listitem: ({ node, nodesToJSX }) => {
              const children = nodesToJSX({ nodes: node.children });
              return (
                <li className="mb-2">
                  <Typography tag="span">{children}</Typography>
                </li>
              );
            },
            // Links

            // Images
            upload: ({ node }) => {
              const image = node.value as Media;
              return (
                <div className="relative my-12 max-h-[37.5rem] min-h-[22.375rem] w-full overflow-hidden rounded-xl sm:my-24 lg:min-h-[37.5rem]">
                  <Image
                    src={image.url || ""}
                    alt={image.alt || "Blog post image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
                    priority
                  />
                </div>
              );
            },
            // Blockquotes
            quote: ({ node, nodesToJSX }) => {
              const children = nodesToJSX({ nodes: node.children });
              return (
                <blockquote className="border-l-4 border-neutrals-300 pl-4 italic">
                  <Typography>{children}</Typography>
                </blockquote>
              );
            },
            // Text alignment
            // align: ({ node, nodesToJSX }) => {
            //   const children = nodesToJSX({ nodes: node.children });
            //   const alignmentClasses = {
            //     left: "text-left",
            //     center: "text-center",
            //     right: "text-right",
            //     justify: "text-justify",
            //   };

            //   return (
            //     <div className={`${alignmentClasses[node.format]} mb-4`}>
            //       {children}
            //     </div>
            //   );
            // },
            // Text formatting
            text: ({ node }) => {
              let className = "";
              if (node.format & 1) className += "font-bold ";
              if (node.format & 2) className += "italic ";
              if (node.format & 8) className += "underline ";
              if (node.format & 16) className += "line-through ";
              if (node.format & 32) className += "uppercase ";

              return <span className={className}>{node.text}</span>;
            },
          })}
        />
        <div className="flex flex-col justify-between gap-12 pb-24 sm:flex-row sm:gap-0">
          <div className="mt-auto flex max-w-[33.125rem] flex-wrap items-center gap-2">
            {categories.map((category, index) => (
              <Pill name={category.name} variant="large" key={index} />
            ))}
          </div>
          <div className="flex items-center gap-6 sm:gap-11">
            <Typography
              variant="caption"
              className="whitespace-nowrap uppercase"
            >
              {dict.blogPost.share}
            </Typography>
            <MediaShare id={id} />
          </div>
        </div>
      </div>

      <RecentBlogWrapper
        posts={docs}
        dict={{ global: dict.global, blogPost: dict.blogPost }}
      />
    </div>
  );
};

export default BlogPost;
