import React, { createContext, useContext, useState } from "react";

export const LanguageContext = createContext();

export default function ContextLanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  function handleLanguage() {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "sr" : "en"));
  }

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
