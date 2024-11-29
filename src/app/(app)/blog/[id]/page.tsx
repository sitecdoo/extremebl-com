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

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

const BlogPost = async ({ params }: BlogPostPageProps) => {
  const payload = await getPayload({ config });

  const getPost = async (id: string) => {
    try {
      const post = await payload.findByID({
        collection: "posts",
        id: id,
      });
      return post;
    } catch (error) {
      notFound();
    }
  };

  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <HeroBanner img={post.thumbnail.url} title={post.title} />

      <div className="flex max-w-[1082px] flex-col justify-center text-2xl">
        <div className="flex items-center justify-center text-neutral-600">
          <Typography variant="body-sm" fontWeight="bold">
            Autor:
          </Typography>
          <Typography variant="body-sm">{post.author.name}</Typography>

          <Typography variant="body-sm" fontWeight="bold">
            Datum objave:
          </Typography>
          <Typography variant="body-sm">{post.createdAt}</Typography>
        </div>
        <Typography
          className="text-center text-2xl italic leading-9 text-neutral-800"
          tag="p"
        >
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
                  tag="p"
                  className="mb-4 text-neutrals-800"
                >
                  {children}
                </Typography>
              );
            },
            // Headings
            heading: ({ node, nodesToJSX }) => {
              const children = nodesToJSX({ nodes: node.children });
              const tag = node.tag;
              const variant = node.tag;

              return (
                <Typography
                  variant={variant}
                  tag={tag}
                  fontWeight="bold"
                  className="mb-4 mt-8 text-neutrals-800"
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
                <ListTag className="mb-4 ml-6 list-inside text-neutrals-800">
                  <Typography>{children}</Typography>
                </ListTag>
              );
            },
            listitem: ({ node, nodesToJSX }) => {
              const children = nodesToJSX({ nodes: node.children });
              return (
                <li className="mb-2">
                  <Typography variant="body">{children}</Typography>
                </li>
              );
            },
            // Links

            // Images
            upload: ({ node }) => {
              if (!node.value?.url) return null;
              return (
                <div className="relative my-8 max-h-[600px] min-h-[358px] w-full overflow-hidden rounded-xl lg:min-h-[600px]">
                  <Image
                    src={node.value.url}
                    alt={node.value.alt || "Blog post image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
                  />
                </div>
              );
            },
            // Blockquotes
            quote: ({ node, nodesToJSX }) => {
              const children = nodesToJSX({ nodes: node.children });
              return (
                <blockquote className="border-l-4 border-neutrals-300 pl-4 italic">
                  <Typography variant="body">{children}</Typography>
                </blockquote>
              );
            },
            // Code blocks
            codeBlock: ({ node }) => (
              <pre className="mb-4 rounded-lg bg-gray-100 p-4">
                <code className="font-mono text-sm">{node.textContent}</code>
              </pre>
            ),
            // Inline code
            code: ({ node }) => (
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
                {node.textContent}
              </code>
            ),
            // Text alignment
            align: ({ node, nodesToJSX }) => {
              const children = nodesToJSX({ nodes: node.children });
              const alignmentClasses = {
                left: "text-left",
                center: "text-center",
                right: "text-right",
                justify: "text-justify",
              };

              return (
                <div className={`${alignmentClasses[node.format]} mb-4`}>
                  {children}
                </div>
              );
            },
            // Text formatting
            text: ({ node, nodesToJSX }) => {
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
      </div>
    </>
  );
};

export default BlogPost;
