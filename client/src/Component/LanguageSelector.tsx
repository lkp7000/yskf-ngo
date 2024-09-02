import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";

const languages = [
  { code: "en", lang: "English" },
  { code: "hi", lang: "Hindi" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: any) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative inline-flex items-center sm:mb-0 mb-2">
      <MdLanguage className="absolute left-6 pointer-events-none text-white" />
      <select
        onChange={changeLanguage}
        value={i18n.language}
        className="pl-8 pr-0 py-1 bg-transparent border border-white rounded-md mx-2 "
      >
        {languages.map((lng) => (
          <option
            key={lng.code}
            value={lng.code}
            className="bg-[#e50378] text-white"
          >
            {lng.lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
