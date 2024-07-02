import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    value: 1000,
    content: "",
  },
  reducers: {
    deposit: (state, { payload }) => {
      state.value = state.value + payload;
      //?Приклади як працює Immer.
    },
    withdraw: (state, { payload }) => {
      return {
        ...state,
        value: state.value - payload,
      };
    },
  },
});

export const { deposit, withdraw } = balanceSlice.actions;

//?Приклад export в методі createSlice();

export const balanceReducer = balanceSlice.reducer;

//?createSlice - в ньому одразу екшени, редюсери та всі зміни в одному файлі.

//?   state.value = state.value + payload; - Цей приклад працює за допомогою бібліотеки Immer.
//   return {
//     ...state,
//     value: state.value + payload,
//   };
//?ВАЖЛИВО!!! Якщо ми користуємось СПРЕД ОПЕРАТОРОМ ... (тобто розпушуємо state) то ЗАВЖДИ використовуємо return!!!
