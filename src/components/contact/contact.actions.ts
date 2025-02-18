"use server";

import { Resend } from "resend";
import { ContactPayload, getContactSchema } from "./contact.schemas";
import { createChallenge, verifySolution } from "altcha-lib";
import { Payload } from "altcha-lib/types";
import EmailTemplate from "../custom-ui/email-template";

const hmacKey = process.env.ALTCHA_SECRET_KEY;
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailAction = async (
  data: ContactPayload,
  altchaPayload: Payload,
) => {
  const result = getContactSchema().safeParse(data);

  if (result.error) {
    return { success: false, error: result.error.format() };
  }

  const { name, email, message, phone, subject } = result.data;

  if (!hmacKey) {
    return { success: false };
  }

  const verified = await verifySolution(altchaPayload, hmacKey);

  if (!verified) {
    return { success: false };
  }

  const subjectPrefix =
    subject?.includes("paket") || subject?.includes("package")
      ? `Rođendan | `
      : "";
  const emailSubject = `${subjectPrefix}${subject ? subject.replace(/-/g, " ").replace(/^./, (char) => char.toUpperCase()) : "ExtremeBL - Contact form"}`;

  const emailData = await resend.emails.send({
    from: "ExtremeBL <onboarding@resend.dev>",
    to: "andrejjurisic99@gmail.com",
    subject: emailSubject,
    react: EmailTemplate({ name, email, message, phone }),
  });

  if (emailData.error) {
    return { success: false };
  }

  return { success: true };
};

export const createChallengeAction = async () => {
  if (!hmacKey) {
    return new Response("Altcha secret key is not set", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }

  const createdChallenge = await createChallenge({
    hmacKey,
    maxNumber: 150000,
  });

  const { maxnumber, ...challenge } = createdChallenge;

  return challenge;
};
