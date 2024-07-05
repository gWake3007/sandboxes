import { balanceReducer } from "./balanceSlice";
import { itemsReducer } from "./itemsSlice";
import { todoReducer } from "./todo/todoSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { filterReducer } from "./filterSlice";

const persistConfig = {
  key: "balance",
  storage,
  whitelist: ["value"],
};

const persistConfig2 = {
  key: "items",
  storage,
};

const balancePersistReducer = persistReducer(persistConfig, balanceReducer);
const itemsPersistReducer = persistReducer(persistConfig2, itemsReducer);

export const rootReducer = {
  balance: balancePersistReducer,
  items: itemsPersistReducer,
  todo: todoReducer,
  filter: filterReducer,
};
