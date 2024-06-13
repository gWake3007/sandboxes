import { useContext } from "react";
import { langContext } from "../../LangContext";

const SelectLang = () => {
  const ctx = useContext(langContext);
  return (
    <select
      value={ctx.lang}
      onChange={({ target: { value } }) => ctx.changeLang(value)}
    >
      <option value="ua">UA</option>
      <option value="en">EN</option>
    </select>
  );
};

export default SelectLang;

//?Змінюємо контекст в компоненті а також в іншому в нього вже є доданий стан.
