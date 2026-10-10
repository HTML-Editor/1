// LANGUAGE CONTEXT - remembers which language the visitor chose (English or Hindi)
// and gives every page the translation helpers.
//
// USE IT IN ANY COMPONENT:
//   const { t, td, lang, setLang } = useLang();
//   t("home.why")                      -> UI text from src/i18n/translations.js (key must exist)
//   t("contact.failed", { email })     -> same, but fills the {email} placeholder
//   td(product.description)            -> translates product data (see dataHi in translations.js)
//   lang                               -> "en" or "hi"
//
// The choice is saved in the browser (localStorage key "lang"), so it is remembered next visit.
import { createContext, useContext, useEffect, useState } from "react";
import { ui, dataHi } from "./translations";

const LanguageContext = createContext(null);

// Read the saved language; fall back to English if storage is unavailable or the value is odd.
function getInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "hi") return saved;
  } catch (e) {
    /* storage blocked (private mode) - ignore */
  }
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  // Whenever the language changes: save it and tell the browser the page language
  // (helps screen readers and the Devanagari font).
  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  // t(): look up the key in the chosen language, then in English, then show the key itself.
  const t = (key, vars) => {
    let text = ui[lang]?.[key] ?? ui.en[key] ?? key;
    if (vars) {
      Object.keys(vars).forEach((k) => {
        text = text.split(`{${k}}`).join(vars[k]);
      });
    }
    return text;
  };

  // td(): translate product data text (categories, descriptions...). English is returned as is.
  const td = (text) => (lang === "hi" ? dataHi[text] ?? text : text);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, td }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider> (see main.jsx)");
  return ctx;
}
