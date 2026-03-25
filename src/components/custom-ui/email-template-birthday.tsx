import { Html, Body, Tailwind, Section, Text } from "@react-email/components";

type BirthdayEmailTemplateProps = {
  packageLabel: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  licensePlate?: string;
  childrenAge: string;
};

const BirthdayEmailTemplate = ({
  packageLabel,
  name,
  email,
  phone,
  date,
  time,
  licensePlate,
  childrenAge,
}: BirthdayEmailTemplateProps) => {
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
            <Text className="font-bold">Rezervacija rođendana:</Text>
            <Section>
              <Text>Paket: {packageLabel}</Text>
              <Text>Ime i prezime: {name}</Text>
              <Text>Email: {email}</Text>
              <Text>Telefon: {phone}</Text>
              <Text>Datum proslave: {date}</Text>
              <Text>Preferirano vrijeme: {time}</Text>
              {licensePlate && <Text>Registarske tablice: {licensePlate}</Text>}
              <Text>Uzrast djece: {childrenAge}</Text>
            </Section>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default BirthdayEmailTemplate;
