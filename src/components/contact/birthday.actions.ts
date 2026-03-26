"use server";

import { Resend } from "resend";
import { BirthdayPayload, getBirthdaySchema } from "./birthday.schemas";
import { verifySolution } from "altcha-lib";
import { Payload } from "altcha-lib/types";
import BirthdayEmailTemplate from "../custom-ui/email-template-birthday";

const hmacKey = process.env.ALTCHA_SECRET_KEY;
const resend = new Resend(process.env.RESEND_API_KEY);

const packageLabels: Record<string, string> = {
  "1": "Paket 1 (do 12 djece)",
  "2": "Paket 2 (do 18 djece)",
  "3": "Paket 3 (do 24 djece)",
};

export const sendBirthdayEmailAction = async (
  data: BirthdayPayload,
  altchaPayload: Payload,
) => {
  const result = getBirthdaySchema().safeParse(data);

  if (result.error) {
    return { success: false, error: result.error.format() };
  }

  if (!hmacKey) {
    return { success: false };
  }

  const verified = await verifySolution(altchaPayload, hmacKey);

  if (!verified) {
    return { success: false };
  }

  const parsedData = result.data;
  const packageLabel =
    packageLabels[parsedData.package] || `Paket ${parsedData.package}`;

  const [year, month, day] = parsedData.date.split("-");
  const formattedDate = `${day}.${month}.${year}.`;

  const campusEmailRecipient = "dj.blagojevic@gmail.com";
  const hasCampusEmail =
    parsedData.licensePlate && parsedData.licensePlate.trim().length > 0;

  const [emailData, campusEmailData, confirmationEmailData] = await Promise.all(
    [
      resend.emails.send({
        from: "ExtremeBL <website@extremebl.com>",
        to: "extremebl@gmail.com",
        subject: `Rođendan | ${packageLabel}`,
        react: BirthdayEmailTemplate({
          ...parsedData,
          date: formattedDate,
          packageLabel,
        }),
      }),
      hasCampusEmail
        ? resend.emails.send({
            from: "ExtremeBL <website@extremebl.com>",
            to: campusEmailRecipient,
            cc: ["extremebl@gmail.com"],
            subject: "Zahtjev za ulazak vozila na kampus",
            text: `Poštovani,\n\nobraćamo vam se sa molbom za odobrenje za ulazak automobilom na područje kampusa na dan ${formattedDate} godine za automobil registarskih oznaka ${parsedData.licensePlate}.\n\nAutomobili treba da prevezu rekvizite za proslavu rodjendana u penjačkoj sali.\n\nHvala unaprijed i srdačan pozdrav,\nPK Extreme`,
          })
        : Promise.resolve(null),
      resend.emails.send({
        from: "ExtremeBL <website@extremebl.com>",
        to: parsedData.email,
        subject: "Potvrda rezervacije rođendana | PK Extreme",
        react: BirthdayEmailTemplate({
          ...parsedData,
          date: formattedDate,
          packageLabel,
        }),
      }),
    ],
  );

  if (emailData.error) {
    console.error("[Resend error - main]", emailData.error);
    return { success: false };
  }

  if (campusEmailData && "error" in campusEmailData && campusEmailData.error) {
    console.error("[Resend error - campus]", campusEmailData.error);
  }

  if (confirmationEmailData.error) {
    console.error("[Resend error - confirmation]", confirmationEmailData.error);
  }

  return { success: true };
};
