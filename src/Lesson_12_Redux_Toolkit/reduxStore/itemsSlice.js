// export const itemsReducer = (state = { item: "" }, action) => {
//   switch (action.type) {
//     case "items/new":
//       return {
//         ...state,
//         items: action.payload,
//       };
//     default:
//       return state;
//   }
// };
import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    // Додайте інші редуктори, якщо потрібно
  },
});

export const { addItem } = itemsSlice.actions; // Переконайтеся, що ви експортуєте правильно

export const itemsReducer = itemsSlice.reducer;
