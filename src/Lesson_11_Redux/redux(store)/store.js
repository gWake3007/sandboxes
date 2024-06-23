import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState = {
  balance: {
    value: 0,
  },
};

const reducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(reducer, composeWithDevTools());

//?initialState - Це стан для ВСЬОГО нашого проєкту! ВАЖЛИВО!!!
//?Перший раз в state(при рендері) завжди прилітає undefined. Тому ми вказали state=initialState - щоб якщо прилітає undefined то прилітав пустий об'єкт значенть.
//?composeWithDevTools() - Потрібен для того щоб в інструментах розробника була вкладка Redux з якою можна працювати. По типу як до цього було завантаженний додаток щоб бачити components та profiler.
