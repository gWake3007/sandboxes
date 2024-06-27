// import { balanceReducer } from "./balanceSlice_Old";
import { combineReducers } from "redux";
import { balanceReducer } from "./balanceSlice";
import { itemsReducer } from "./balanceSlice";

export const rootReducer = combineReducers({
  // balance: balanceReducer,
  balance: balanceReducer,
  items: itemsReducer,
});

//?Імпортуємо balanceReducer тільки з файлу де зробленно новим методом createSlice!!!ВАЖЛИВО!!!

//?З використанням persistReducer огортаємо наш root в combineReducers. ВАЖЛИВО!!!
