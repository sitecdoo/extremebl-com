import LanguageSelector from "./language-selector";
import { Language, Languages } from "@/utils/dictionary";

type LanguageBarProps = {
  languages: Languages;
  currentLanguage: Language;
};

const LanguageBar = ({ languages, currentLanguage }: LanguageBarProps) => {
  return (
    <div className="rounded-full hover:lg:bg-neutrals-75 xl:px-1">
      <LanguageSelector
        languages={languages}
        currentLanguage={currentLanguage}
      />
    </div>
  );
};

export { LanguageBar };
