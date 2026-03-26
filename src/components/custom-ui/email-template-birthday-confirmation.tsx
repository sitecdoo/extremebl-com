import { Html, Body, Tailwind, Section, Text } from "@react-email/components";

type BirthdayConfirmationEmailTemplateProps = {
  packageLabel: string;
  name: string;
  date: string;
  time: string;
  childrenAge: string;
};

const BirthdayConfirmationEmailTemplate = ({
  packageLabel,
  name,
  date,
  time,
  childrenAge,
}: BirthdayConfirmationEmailTemplateProps) => {
  return (
    <Html>
      <Tailwind>
        <Body>
          <Section className="flex flex-col gap-4">
            <Text>Poštovani/a {name},</Text>
            <Text>
              Hvala vam na rezervaciji! Vaš zahtjev za proslavu rođendana je
              uspješno primljen. Kontaktiraćemo vas uskoro radi potvrde termina.
            </Text>
            <Section>
              <Text className="font-bold">Detalji rezervacije:</Text>
              <Text>Paket: {packageLabel}</Text>
              <Text>Datum proslave: {date}</Text>
              <Text>Preferirano vrijeme: {time}</Text>
              <Text>Uzrast djece: {childrenAge}</Text>
            </Section>
            <Text>
              Ukoliko imate pitanja, slobodno nas kontaktirajte na{" "}
              extremebl@gmail.com.
            </Text>
            <Text>Srdačan pozdrav,{"\n"}Tim PK Extreme</Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default BirthdayConfirmationEmailTemplate;
