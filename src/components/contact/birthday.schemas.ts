import { z } from "zod";

const phoneRegex = /^[+\d][\d\s\-().]{4,19}$/;

type BirthdayErrors = {
  nameRequired?: string;
  nameTooLong?: string;
  emailInvalid?: string;
  phoneRequired?: string;
  phoneInvalid?: string;
  dateRequired?: string;
  datePast?: string;
  timeRequired?: string;
  timeInvalid?: string;
  licensePlateTooLong?: string;
  childrenAgeRequired?: string;
  childrenAgeInvalid?: string;
};

export const getBirthdaySchema = (e: BirthdayErrors = {}) =>
  z.object({
    package: z.enum(["1", "2", "3"]),
    name: z
      .string()
      .trim()
      .min(1, { message: e.nameRequired ?? "Name is required" })
      .max(100, { message: e.nameTooLong ?? "Name is too long" }),
    email: z
      .string()
      .email({ message: e.emailInvalid ?? "Please enter a valid email" }),
    phone: z
      .string()
      .trim()
      .min(1, { message: e.phoneRequired ?? "Phone number is required" })
      .regex(phoneRegex, {
        message: e.phoneInvalid ?? "Please enter a valid phone number",
      }),
    date: z
      .string()
      .trim()
      .min(1, { message: e.dateRequired ?? "Date is required" })
      .refine(
        (val) => {
          const selected = new Date(val);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return selected >= today;
        },
        { message: e.datePast ?? "Date cannot be in the past" },
      ),
    time: z
      .string()
      .trim()
      .min(1, { message: e.timeRequired ?? "Preferred time is required" })
      .refine(
        (val) => {
          const parts = val.split(":");
          if (parts.length < 2) return false;
          const minutes = parseInt(parts[1], 10);
          return minutes === 0 || minutes === 30;
        },
        {
          message:
            e.timeInvalid ??
            "Time must be on the hour or half hour (e.g. 10:00 or 10:30)",
        },
      ),
    licensePlate: z
      .string()
      .max(20, {
        message: e.licensePlateTooLong ?? "License plate is too long",
      })
      .optional()
      .default(""),
    childrenAge: z
      .string()
      .trim()
      .min(1, {
        message: e.childrenAgeRequired ?? "Children's age is required",
      })
      .refine(
        (val) => {
          const n = parseInt(val, 10);
          return /^\d+$/.test(val) && n >= 1 && n <= 18;
        },
        {
          message:
            e.childrenAgeInvalid ?? "Please enter a valid age between 1 and 18",
        },
      ),
  });

export type BirthdayPayload = z.infer<ReturnType<typeof getBirthdaySchema>>;
