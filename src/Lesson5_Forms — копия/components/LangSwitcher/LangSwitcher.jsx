import { useId } from "react";

const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();
  const changeLang = (evt) => {
    onSelect(evt.target.value);
  };
  return (
    <div>
      <label htmlFor={selectId}>Choose Language</label>
      <select id={selectId} value={value} onChange={changeLang}>
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
