"use server";

import { Resend } from "resend";
import { ContactPayload, getContactSchema } from "./contact.schemas";
import { createChallenge, verifySolution } from "altcha-lib";
import { Payload } from "altcha-lib/types";

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

  const { name, email, message } = result.data;

  if (!hmacKey) {
    return { success: false };
  }

  const verified = await verifySolution(altchaPayload, hmacKey);

  if (!verified) {
    return { success: false };
  }

  try {
    // const data = await resend.emails.send({
    //   from: "Acme <onboarding@resend.dev>",
    //   to: ["andrejjurisic99@gmail.com"],
    //   subject: "ExtremeBL - Contact form",
    //   react: EmailTemplate({ name, email, message }),
    // });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
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
