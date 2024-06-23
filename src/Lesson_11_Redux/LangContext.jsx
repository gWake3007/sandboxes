import { createContext, useState } from "react";

export const langContext = createContext();
// console.log(langContext);

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("ua");
  const [name, setName] = useState("Name");
  const ctxValues = { lang, changeLang: setLang, name, setName };
  return (
    <langContext.Provider value={ctxValues}>{children}</langContext.Provider>
  );
};

export default LangProvider;

//?Об'єкт ctxValues - потрібен для методів щоб підставити в value в langContext.
