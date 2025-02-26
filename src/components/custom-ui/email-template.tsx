import { Html, Body, Tailwind, Section, Text } from "@react-email/components";

type EmailTemplateProps = {
  name: string;
  email: string;
  message: string;
  phone?: string;
};

const EmailTemplate = ({ name, email, message, phone }: EmailTemplateProps) => {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            fontFamily: {
              "league-spartan": ["var(--font-league-spartan)", "sans-serif"],
            },
          },
        }}
      >
        <Body>
          <Section className="flex flex-col gap-4">
            <Text className="font-bold">Kontakt forma:</Text>
            <Section>
              <Text>Ime i prezime: {name}</Text>
              <Text>Email: {email}</Text>
              <Text>Telefon: {phone}</Text>
              <Text>Poruka:</Text>
              <Text>{message}</Text>
            </Section>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
