import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeClass = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "2rem",
    textAlign: "center",
  };

  return (
    <div style={themeClass}>
      <h1>Toggle button</h1>
      <button onClick={toggleTheme}>Click me</button>
    </div>
  );
}