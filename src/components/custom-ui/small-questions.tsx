"use client";

import { useState } from "react";
import Typography from "./typography";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
  {
    text: "Šta je penjanje",
    answer:
      "Sportsko penjanje je oblik penjanja po stijenama ili umjetnim stijenama u kontroliranom okruženju, gdje se penjači oslanjaju na fizičku snagu, tehniku i izdržljivost kako bi savladali različite penjačke rute. Ova aktivnost uključuje korištenje sigurnosne opreme poput užadi, pojaseva i karabinera kako bi se smanjio rizik od ozljeda. Sportsko penjanje je popularan i uzbudljiv sport koji razvija mišićnu snagu, koordinaciju, mentalnu koncentraciju i planiranje.",
  },
  {
    text: "Koji su benefiti penjanja?",
    answer:
      "Penjanje pomaže djeci da razviju finu i grubu motoriku, poboljšavajući koordinaciju, ravnotežu i snagu. Kroz razne pokrete i hvatanja, djeca postaju svjesnija svog tijela i načina na koji ga mogu koristiti.",
  },
  {
    text: "Da li svako može penjati?",
    answer:
      "Svaki uspon predstavlja mali izazov, a njegovo savladavanje jača djetetovo samopouzdanje i osjećaj samostalnosti. Penjanje omogućava djeci da preuzmu inicijativu i samostalno donose odluke, što je ključno za njihov osobni razvoj.",
  },
];

const SmallQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClick = (index: number) => {
    if (openIndex === index) {
      return;
    }

    setIsVisible(false);
    setTimeout(() => {
      setOpenIndex(index);
      setIsVisible(true);
    }, 300);
  };

  return (
    <div className="flex flex-col gap-8 self-start lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:self-center xl:gap-20 2xl:gap-40">
      <div className="space-y-4 lg:space-y-8">
        {questions.map((question, index) => {
          return (
            <div
              key={index}
              className={cn(
                "flex w-fit cursor-pointer items-center gap-x-4 xl:max-w-[28.5rem]",
                openIndex === index && "cursor-default",
              )}
              onClick={() => handleClick(index)}
            >
              <div className="size-6 sm:size-7 lg:size-9">
                {openIndex === index ? (
                  <Minus className="size-6 rounded-full border-2 border-neutrals-800 p-1 sm:size-7 lg:size-9" />
                ) : (
                  <Plus className="size-6 rounded-full border-2 border-neutrals-300 p-1 text-neutrals-300 sm:size-7 lg:size-9" />
                )}
              </div>
              <Typography
                variant="h4"
                tag="h4"
                fontWeight="bold"
                className={cn(
                  "flex-wrap",
                  openIndex !== index && "text-neutrals-300",
                )}
              >
                {question.text}
              </Typography>
            </div>
          );
        })}
      </div>
      <Typography
        className={cn(
          "min-h-72 transition-all duration-300 ease-in-out sm:min-h-36 md:min-h-32 lg:min-h-64 lg:max-w-xl",
          isVisible ? "opacity-100" : "opacity-0",
        )}
      >
        {questions[openIndex].answer}
      </Typography>
    </div>
  );
};

export default SmallQuestions;
