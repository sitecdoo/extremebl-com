import LanguageSelector from "./language-selector";
import { Languages, getLanguage } from "@/utils/dictionary";

type LanguageBarProps = {
  languages: Languages;
};

const LanguageBar = async ({ languages }: LanguageBarProps) => {
  const currentLanguage = await getLanguage();
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
