import LanguageSelector from "./language-selector";
import { Language, Languages } from "@/utils/dictionary";

type LanguageBarProps = {
  languages: Languages;
  currentLanguage: Language;
};

const LanguageBar = ({ languages, currentLanguage }: LanguageBarProps) => {
  return (
    <div className="mr-2 space-x-2 p-0">
      <LanguageSelector
        languages={languages}
        currentLanguage={currentLanguage}
      />
    </div>
  );
};

export { LanguageBar };
