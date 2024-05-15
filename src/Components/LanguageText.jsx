import React, { useContext } from "react";
import { LanguageContext } from "./ContextLanguageProvider.jsx";

export default function LanguageText() {
  const { language } = useContext(LanguageContext);

  const text = {
    en: "Hello, how are you?",
    sr: "Hola, ¿cómo estás?",
  };
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <p>{text[language]}</p>
    </div>
  );
}
