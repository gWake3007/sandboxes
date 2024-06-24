import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";

export const store = configureStore({
  reducer,
});

//?В Redux Toolkit замість createStore стор оготаємо в configureStore.
//?Сам об'єкт reducer часто ще називають rootReducer.Але в configurateStore значення ключа повинно бути reducer.(reducer: reducer, || reducer, тобто одноіменний ключ значення використовуємо.)

// const initialState = {
//   balance: {
//     value: 1000,
//     comments: "",
//   },
//   users: {},
//   items: { item: "" },
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value + action.payload,
//         },
//       };
//     case "balance/withdraw":
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value - action.payload,
//         },
//       };
//     case "items/new":
//       return {
//         ...state,
//         items: {
//           ...state.items,
//           items: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

//?initialState - Це стан для ВСЬОГО нашого проєкту! ВАЖЛИВО!!!
//?Перший раз в state(при рендері) завжди прилітає undefined. Тому ми вказали state=initialState - щоб якщо прилітає undefined то прилітав пустий об'єкт значенть.
//?composeWithDevTools() - Потрібен для того щоб в інструментах розробника була вкладка Redux з якою можна працювати. По типу як до цього було завантаженний додаток щоб бачити components та profiler.
//?actionDeposit - type(що ми хочемо змінити),payload(на що ми хочемо змінити)
//?Обов'язково в reducer де пишемо через switch case повертати новий об'єкт де значення буде action.payload!ВАЖЛИВО!!! По дефолту повертати той state що в нас є. Якщо прийде якийсь не той type.
//?За допомогою спред оператору ... в функції switch case щоб не втрачати значення ми підтягуємо їх.
//? case "balance/withdraw": - Тут ми віднімаємо від суми значення.
//?Для порівняння залишаються balanceReducer, itemsReducer та reducer.Щоб було розуміння в чому різниця. Для більш зручного використання. ВАЖЛИВО!!!
//?combineReducers - потрібен для загального додавання reducer до одного. В той самий час для зручності всі функції їх змін розділенні і структурованні.ВАЖЛИВО ДЛЯ ЗРУЧНОСТІ!!!
