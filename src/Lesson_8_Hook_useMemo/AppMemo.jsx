import { useState, useRef, useContext } from "react";
import RefExample from "./components/RefExample/RefExample";
import UseMemoExample from "./components/UseMemoExample/UseMemoExample";
import "./LangContext";
import { langContext } from "./LangContext";
import SelectLang from "./components/SelectLang/SelectLang";

const AppMemo = () => {
  const [counter, setCounter] = useState(0);
  const time = useRef(Date.now());
  const value = useContext(langContext);
  console.log(value);
  const ctx = useContext(langContext);
  return (
    <>
      <SelectLang />
      <p>{ctx.name}</p>
      <p>{time.current}</p>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <RefExample />
      <UseMemoExample />
    </>
  );
};

export default AppMemo;

//?Стукаємось до дати в тезі <p> через time.current. Важливо!!!
//?clg(value) на 12 рядку показує на яку мову в select було змінено.
//?В компоненті UseMemoExample є кнопка updateGlobalName Яка змінює параграф <p> ctx.name - на ім'я Alex після натискання.
