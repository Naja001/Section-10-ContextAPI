import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import ContextLanguageProvider from "./Components/ContextLanguageProvider.jsx";

ReactDOM.render(
  <React.StrictMode>
    <ContextLanguageProvider>
      <App />
    </ContextLanguageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
