import { useState } from "react";
import { useTranslation } from "react-i18next";

const useChangeLanguages = () => {
  const { t, i18n } = useTranslation();
  const [Lang, setLang] = useState("en");

  const ChangeLanuage = (lang: string) => {
    i18n.changeLanguage(lang);
    document.dir = lang === "ar" ? "rtl" : "ltr";
    setLang(lang);
  };

  return { t, ChangeLanuage, Lang };
};

export default useChangeLanguages;
