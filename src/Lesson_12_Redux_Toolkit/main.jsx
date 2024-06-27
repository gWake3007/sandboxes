import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import LangProvider from "./LangContext";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./reduxStore/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

//?Пропсом підтягуємо файл store.js.Та додаємо його пропсом в Provider яким огортаємо весь наш проєкт.
