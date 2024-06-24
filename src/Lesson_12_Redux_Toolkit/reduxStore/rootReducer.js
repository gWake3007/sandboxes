import { balanceReducer } from "./balanceSlice";
import { itemsReducer } from "./itemsSlice";

export const reducer = {
  balance: balanceReducer,
  items: itemsReducer,
};
