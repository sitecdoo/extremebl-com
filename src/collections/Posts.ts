import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
      required: true,
      maxDepth: 5,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },

    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({}),
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
      required: true,
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      required: true,
    },
  ],
};
