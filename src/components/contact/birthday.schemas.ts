import { z } from "zod";

const phoneRegex = /^[+\d][\d\s\-().]{4,19}$/;

const PACKAGE_DURATIONS: Record<string, number> = {
  "1": 120,
  "2": 150,
  "3": 150,
};

const START_LIMIT = 9 * 60; // 09:00
const END_LIMIT = 22 * 60; // 22:00

function parseTimeRange(val: string) {
  const m = /^(\d{2}):(\d{2}) - (\d{2}):(\d{2})$/.exec(val);
  if (!m) return null;
  const [, sh, sm, eh, em] = m.map(Number);
  if ((sm !== 0 && sm !== 30) || (em !== 0 && em !== 30)) return null;
  if (sh > 23 || eh > 23) return null;
  return { startTotal: sh * 60 + sm, endTotal: eh * 60 + em };
}

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
};

export const getBirthdaySchema = (e: BirthdayErrors = {}) =>
  z
    .object({
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
        .min(1, { message: e.timeRequired ?? "Preferred time is required" }),
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
        }),
    })
    .superRefine((data, ctx) => {
      const range = parseTimeRange(data.time);
      const duration = PACKAGE_DURATIONS[data.package];
      if (
        range === null ||
        range.startTotal < START_LIMIT ||
        range.endTotal > END_LIMIT ||
        range.endTotal - range.startTotal !== duration
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["time"],
          message: e.timeInvalid ?? "Please select a valid time slot",
        });
      }
    });

export type BirthdayPayload = z.infer<ReturnType<typeof getBirthdaySchema>>;
