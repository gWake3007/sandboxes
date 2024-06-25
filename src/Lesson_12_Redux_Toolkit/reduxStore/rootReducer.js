import { balanceReducer } from "./balanceSlice_Old";
import { itemsReducer } from "./itemsSlice";

export const reducer = {
  balance: balanceReducer,
  items: itemsReducer,
};
