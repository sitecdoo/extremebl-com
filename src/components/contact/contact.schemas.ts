import { z } from "zod";

export const getContactSchema = () =>
  z.object({
    name: z.string().trim().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    message: z.string().trim().min(1, { message: "Message is required" }),
  });

export type ContactPayload = z.infer<ReturnType<typeof getContactSchema>>;
