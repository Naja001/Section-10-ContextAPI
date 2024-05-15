import React, { useContext } from "react";
import { LanguageContext } from "./ContextLanguageProvider";

export default function LanguageSwicher() {
  const { language, handleLanguage } = useContext(LanguageContext);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <p>Current Language: {language === "en" ? "English" : "Spanish"}</p>
      <button onClick={handleLanguage}>
        {language === "en" ? "Switch to Spanish" : "Switch to English"}
      </button>
    </div>
  );
}
