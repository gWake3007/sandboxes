import React from "react";
import ReactDOM from "react-dom/client";
import AppMemo from "./AppMemo";
// import App from "./App.jsx";
import "./index.css";
import LangProvider from "./LangContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangProvider>
      <AppMemo />
    </LangProvider>
  </React.StrictMode>
);
