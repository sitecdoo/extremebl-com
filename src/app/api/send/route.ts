import EmailTemplate from "@/components/custom-ui/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Received body:", body);
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["andrejjurisic99@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({
        name: body.name,
        email: body.email,
        message: body.message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
