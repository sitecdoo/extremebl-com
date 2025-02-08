"use client";

import { useState } from "react";
import Typography from "./typography";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
  {
    text: "Šta je penjanje",
    answer:
      "Sportsko penjanje sve je popularniji oblik rekreacije i sporta, odnedavno i olimpijski sport, privlačan ljudima širom svijeta. Može se izvoditi na prirodnim ili vještačkim stijenama, a postoje dva glavna načina penjanja – bouldering, koji se odvija na nižim stijenama bez užeta, i penjanje na visokoj stijeni, koje uključuje korištenje sigurnosne opreme poput užadi. Cilj je uspješno popeti zadani smjer, savladavajući sve njegove prepreke (tzv. 'detalje'). Ovaj sport je dostupan ljudima svih starosnih doba, od djece do starijih osoba.",
  },
  {
    text: "Koji su benefiti penjanja?",
    answer:
      "Sportsko penjanje je dinamična i uzbudljiva aktivnost koja donosi brojne koristi za tijelo i um, pružajući fizički izazov, ali i priliku za druženje, putovanja i boravak u prirodi. Osim što pomaže početnicima da prevladaju strah, poboljšava koordinaciju, fokus te jača snagu i izdržljivost cijelog tijela – često ga nazivaju modernom gimnastikom. Kod djece doprinosi razvoju fine i grube motorike, poboljšavajući ravnotežu i svjesnost o pokretima. Penjanje takođe podstiče proizvodnju hormona koji smanjuju stres i povećavaju osjećaj zadovoljstva i ispunjenosti.",
  },
  {
    text: "Da li svako može penjati?",
    answer:
      "Da, sportsko penjanje je aktivnost kojom se može baviti gotovo svako, bez obzira na uzrast i nivo fizičke spremnosti. Penjački smjerovi dolaze u različitim težinama, tako da uvijek postoji nešto prilagođeno početnicima, ali i izazovi za iskusnije penjače. Ipak, osobe s određenim zdravstvenim stanjima, poput problema sa srcem, zglobovima ili balansom, trebalo bi da se konsultuju s ljekarom prije nego što počnu.",
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
