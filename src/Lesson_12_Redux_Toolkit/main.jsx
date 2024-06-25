import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import LangProvider from "./LangContext";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./reduxStore/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

//?Пропсом підтягуємо файл store.js.Та додаємо його пропсом в Provider яким огортаємо весь наш проєкт.
