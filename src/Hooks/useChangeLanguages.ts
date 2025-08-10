import { useTranslation } from "react-i18next";

const useChangeLanguages = () => {
  const { t, i18n } = useTranslation();

  const ChangeLanuage = (lang: string) => {
    i18n.changeLanguage(lang);
    document.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return { t, ChangeLanuage };
};

export default useChangeLanguages;
