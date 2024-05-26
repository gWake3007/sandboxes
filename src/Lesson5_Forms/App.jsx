import LoginForm from "./components/LoginForm/LoginForm";
import MyComponent from "./components/MyComponent/MyComponent";
import SearchBar from "./components/SearchBar/SearchBar";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";
import RadioButton from "./components/RadioButton/RadioButton";
import Checkbox from "./components/Checkbox/Checkbox";
import ControlForm from "./components/ControlForm/ControlForm";
import { useState } from "react";

function App() {
  const handleLogin = (userData) => {
    console.log(userData);
  };
  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const [hasAccepted, setHasAccepted] = useState(false);
  const [values, setValues] = useState({ login: "", password: "" });
  return (
    <>
      <h1>Please login to your account!</h1>
      <LoginForm onLogin={handleLogin} />
      <MyComponent />
      <SearchBar />
      <LangSwitcher value={lang} onSelect={setLang} />
      <p>Selected language: {lang}</p>
      <RadioButton value={coffeeSize} onSelect={setCoffeeSize} />
      <p>Selected coffee: {coffeeSize}</p>
      <Checkbox value={hasAccepted} onSelect={setHasAccepted} />
      <ControlForm value={values} onSelect={setValues} />
    </>
  );
}
export default App;
