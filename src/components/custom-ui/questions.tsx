"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Typography from "./typography";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "Šta je sportsko penjanje?",
    answer:
      "Sportsko penjanje sve je popularniji oblik rekreacije i sporta, odnedavno i olimpijski sport, privlačan ljudima širom svijeta. Može se izvoditi na prirodnim ili vještačkim stijenama, a postoje dva glavna načina penjanja – bouldering, koji se odvija na nižim stijenama bez užeta, i penjanje na visokoj stijeni, koje uključuje korištenje sigurnosne opreme poput užadi. Cilj je uspješno popeti zadani smjer, savladavajući sve njegove prepreke (tzv. 'detalje'). Ovaj sport je dostupan ljudima svih starosnih doba, od djece do starijih osoba.",
  },
  {
    question: "Da li je sportsko penjanje sigurno?",
    answer:
      "Sportsko penjanje je sigurno uz ispravnu opremu i poštovanje sigurnosnih pravila. Osiguranje užetom, pojasevi i strunjače smanjuju rizik od povreda. Većina nesreća dešava se zbog nepažnje ili loše tehnike, ali uz obuku i odgovorno penjanje, ovaj sport je bezbjedan i koristan za tijelo i um.",
  },
  {
    question: "Da li je potrebno prethodno iskustvo za bavljenje sportskim penjanje?",
    answer:
      "Ne, prethodno iskustvo nije potrebno za bavljenje sportskim penjanjem. Početnici mogu započeti uz stručni nadzor na vještačkim stijenama ili na uređenim prirodnim penjalištima. Osnovne tehnike, sigurnosna pravila i korištenje opreme brzo se uče, a smjerovi različite težine omogućavaju postepeni napredak.",
  },
  {
    question: "Koje su fizičke prednosti sportskog penjanja?",
    answer:
      "Sportsko penjanje jača cijelo tijelo, poboljšava koordinaciju i povećava izdržljivost. Aktivira mišiće ruku, nogu, leđa i core-a, razvijajući snagu i fleksibilnost, zbog čega ga često nazivaju modernom gimnastikom. Takođe, poboljšava ravnotežu, motoriku i svjesnost o pokretima, dok ponavljani pokreti i kontrolisano disanje doprinose boljoj kondiciji i otpornosti na umor.",
  },
  {
    question: "Kako da počnem trenirati sportsko penjanje?",
    answer:
      "Dovoljno je da dođeš na probni trening za odrasle, a nakon toga možeš nastaviti dolaziti na treninge. Obično prva dva mjeseca samo penješ, a potom organizujemo osnovni kurs na kojem ćeš naučiti kako da koristiš penjačku užad i opremu.",
  },
    {
    question: "Sa koliko godina djeca mogu početi sa sportskim penjanjem?",
    answer:
      "Djeca mogu početi da se bave sportskim penjanjem već od šeste godine, zavisno od njihove motoričke razvijenosti i koordinacije. Uz stručni nadzor i prilagođene smjerove, penjanje im pomaže u razvoju snage, ravnoteže i samopouzdanja, dok istovremeno kroz igru uče osnovne tehnike i sigurnosna pravila.",
  },
      {
    question: "Kako upisati dijete na sportsko penjanje?",
    answer:
      "Dovoljno je da nas kontaktirate na +387 65 303 034 putem poziva, SMS-a, Viber-a ili WhatsApp-a kako bismo dogovorili probni trening.",
  },
];

const Questions = () => {
  const [open, setIsOpen] = useState("");

  return (
    <div className="grid w-full grid-cols-1 gap-8 self-start md:px-4 lg:w-fit lg:grid-cols-[1fr,1.5fr] lg:gap-x-10 lg:px-8 xl:gap-x-12 xl:px-16 2xl:gap-x-24 2xl:px-36">
      <div className="flex flex-col gap-3">
        <Typography variant="h2" tag="h2" fontWeight="bold">
          Često postavljena pitanja
        </Typography>
        <Typography className="text-neutrals-600">
          U ovoj sekciji pronaći ćete odgovore na najčešća pitanja o penjanju kao i načinima da se priključite i počnete sa treningom!
        </Typography>
      </div>
      <Accordion type="single" collapsible onValueChange={setIsOpen}>
        <div className="flex flex-col gap-3 lg:gap-4">
          {questions.map(({ question, answer }, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg bg-neutrals-100 px-4 py-3 lg:rounded-xl lg:px-5 lg:py-6"
            >
              <AccordionTrigger className="gap-1 lg:gap-5">
                <Typography fontWeight="bold">{question}</Typography>
                <div className="animate-button-in flex size-9 shrink-0 items-center justify-center">
                  {open === `item-${index}` ? (
                    <Minus className="size-7 rounded-full border-2 border-neutrals-800 p-1" />
                  ) : (
                    <Plus className="size-7 rounded-full border-2 border-neutrals-800 p-1" />
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography
                  tag="span"
                  variant="body-sm"
                  className="inline-block max-w-2xl xl:max-w-3xl"
                >
                  {answer}
                </Typography>
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </Accordion>
    </div>
  );
};

export default Questions;
