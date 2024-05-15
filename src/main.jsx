import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserAuthenticationProvider from "./Components/UserAuthenticationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuthenticationProvider>
      <App />
    </UserAuthenticationProvider>
  </React.StrictMode>
);
