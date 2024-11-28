"use server";

import { Resend } from "resend";
import { ContactPayload, getContactSchema } from "./contact.schemas";
import EmailTemplate from "../custom-ui/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailAction = async (data: ContactPayload) => {
  const result = getContactSchema().safeParse(data);

  if (result.error) {
    return { success: false, error: result.error.format() };
  }

  const { name, email, message } = result.data;

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["andrejjurisic99@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ name, email, message }),
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};
