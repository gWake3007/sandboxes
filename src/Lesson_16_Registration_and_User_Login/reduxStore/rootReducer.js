import { authReducer } from "./auth/authSlice";
import { tasksReducer } from "./tasks/tasksSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

//?persistedAuthReducer - обгортка навколо нашого authReducer для запису його в local storage(чи якихсь данних з нього).
//?whitelist: ["token"], - масив ключів які треба зберігати.
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = {
  auth: persistedAuthReducer,
  tasks: tasksReducer,
};
