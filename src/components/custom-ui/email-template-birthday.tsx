import {
  Html,
  Body,
  Tailwind,
  Section,
  Text,
  Img,
  Link,
} from "@react-email/components";

type BirthdayEmailTemplateProps = {
  packageLabel: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  licensePlate?: string;
  childrenAge: string;
  campusImageSrc: string;
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
  campusImageSrc,
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
              <Text>
                Lokacija:{" "}
                <Link href="https://share.google/XmNFjG0WRYO2xmN5Q">
                  Climbing Club Extreme na Google Maps
                </Link>
              </Text>
              {licensePlate && (
                <>
                  <Text>
                    Ukoliko ste nam poslali vaše registarske tablice, vašem
                    automobilu je omogućen pristup na Kampus i do naše sale
                    možete doći prateći uputstva na priloženoj slici.
                  </Text>
                  <Img
                    src={campusImageSrc}
                    alt="Uputstvo za pristup kampusu automobilom"
                    style={{ maxWidth: "500px", height: "auto" }}
                  />
                </>
              )}
            </Section>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default BirthdayEmailTemplate;
