import React from "react";
import ReactDOM from "react-dom/client";
import App from "./shared/pages/App.tsx";
import GlobalStyle from "./shared/styles/global.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
