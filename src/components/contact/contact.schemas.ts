import { z } from "zod";

const phoneRegex = /^[+\d][\d\s\-().]{4,19}$/;

type ContactErrors = {
  nameRequired?: string;
  nameTooLong?: string;
  emailInvalid?: string;
  phoneRequired?: string;
  phoneInvalid?: string;
  messageTooShort?: string;
  messageTooLong?: string;
};

export const getContactSchema = (e: ContactErrors = {}) =>
  z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: e.nameRequired ?? "Name is required" })
      .max(100, { message: e.nameTooLong ?? "Name is too long" }),
    email: z
      .string()
      .email({ message: e.emailInvalid ?? "Please enter a valid email" }),
    subject: z.string().max(200).optional().default(""),
    phone: z
      .string()
      .trim()
      .min(1, { message: e.phoneRequired ?? "Phone number is required" })
      .regex(phoneRegex, {
        message: e.phoneInvalid ?? "Please enter a valid phone number",
      }),
    message: z
      .string()
      .trim()
      .min(10, {
        message:
          e.messageTooShort ?? "Message is too short (min. 10 characters)",
      })
      .max(2000, {
        message:
          e.messageTooLong ?? "Message is too long (max. 2000 characters)",
      }),
  });

export type ContactPayload = z.infer<ReturnType<typeof getContactSchema>>;
