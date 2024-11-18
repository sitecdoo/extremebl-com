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
    question: "Šta je penjanje?",
    answer:
      "Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači ",
  },
  {
    question: "Da li je sportsko penjanje sigurno?",
    answer:
      "Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači ",
  },
  {
    question: "Da li je potrebno prethodno iskustvo za sportsko penjanje?",
    answer:
      "Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači ",
  },
  {
    question: "Koje su fizičke prednosti sportskog penjanja?",
    answer:
      "Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači ",
  },
  {
    question: "Koliko koštaju časovi sportskog penjanja?",
    answer:
      "Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači ",
  },
  {
    question: "Da li je sportsko penjanje prikladno za decu?",
    answer:
      "Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači ",
  },
];

const Questions = () => {
  const [open, setIsOpen] = useState("");

  return (
    <div className="grid w-full grid-cols-1 gap-8 self-start md:px-4 lg:w-fit lg:grid-cols-[1fr,2fr] lg:gap-x-10 lg:px-8 xl:gap-x-12 xl:px-16 2xl:gap-x-24 2xl:px-36">
      <div className="flex flex-col gap-3">
        <Typography variant="h2" tag="h2" fontWeight="bold">
          Često postavljena pitanja
        </Typography>
        <Typography className="text-neutrals-600 2xl:w-[28.125rem]">
          U ovoj sekciji pronaći ćete odgovore na najčešća pitanja o penjanju.
          Saznajte sve što vas zanima o opremi, tehnikama i savjetima za sigurno
          i uspješno penjanje!
        </Typography>
      </div>
      <Accordion type="single" collapsible onValueChange={setIsOpen}>
        <div className="flex flex-col gap-3">
          {questions.map(({ question, answer }, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg bg-neutrals-100 px-4 py-3 lg:px-5 lg:py-6"
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
