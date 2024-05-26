import LoginForm from "./components/LoginForm/LoginForm";
import MyComponent from "./components/MyComponent/MyComponent";
import SearchBar from "./components/SearchBar/SearchBar";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";
import RadioButton from "./components/RadioButton/RadioButton";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("uk");
  const handleLogin = (userData) => {
    console.log(userData);
  };
  return (
    <>
      <h1>Please login to your account!</h1>
      <LoginForm onLogin={handleLogin} />
      <MyComponent />
      <SearchBar />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <RadioButton />
    </>
  );
}
export default App;
