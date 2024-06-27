// import { balanceReducer } from "./balanceSlice_Old";
import { combineReducers } from "redux";
import { balanceReducer } from "./balanceSlice";
import { itemsReducer } from "./balanceSlice";

export const reducer = {
  balance: balanceReducer,
  items: itemsReducer,
};
