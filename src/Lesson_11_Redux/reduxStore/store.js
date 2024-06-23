import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";

const initialState = {
  balance: {
    value: 1000,
    comments: "",
  },
  users: {},
  items: {},
};

export const actionDeposit = (value) => ({
  type: "balance/deposit",
  payload: value,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        balance: {
          ...state.balance,
          value: action.payload,
        },
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, composeWithDevTools());

//?initialState - Це стан для ВСЬОГО нашого проєкту! ВАЖЛИВО!!!
//?Перший раз в state(при рендері) завжди прилітає undefined. Тому ми вказали state=initialState - щоб якщо прилітає undefined то прилітав пустий об'єкт значенть.
//?composeWithDevTools() - Потрібен для того щоб в інструментах розробника була вкладка Redux з якою можна працювати. По типу як до цього було завантаженний додаток щоб бачити components та profiler.
//?actionDeposit - type(що ми хочемо змінити),payload(на що ми хочемо змінити)
//?Обов'язково в reducer де пишемо через switch case повертати новий об'єкт де значення буде action.payload!ВАЖЛИВО!!! По дефолту повертати той state що в нас є. Якщо прийде якийсь не той type.
//?За допомогою спред оператору ... в функції switch case щоб не втрачати значення ми підтягуємо їх.
