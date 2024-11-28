"use server";

import { Resend } from "resend";
import { ContactPayload } from "./contact.schemas";
import EmailTemplate from "../custom-ui/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailAction = async (data: ContactPayload) => {
  const { name, email, message } = data;
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["andrejjurisic99@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ name, email, message }),
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
