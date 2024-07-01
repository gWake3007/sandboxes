import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: null,
    isLoading: false,
    error: false,
  },
  extraReducers: {},
});

export const todoReducer = todoSlice.reducer;

//?Якщо працюємо з бек-Ендом то одразу в initialState додаємо isLoading та error. Тобто опрацювуємо всі стани не в компоненті а в слайсі!
//?extraReducers - потрібен для редюсера який був створенний не в слайсі(в нашому випадку в todoThunks - тобто з запиту з бек-Енду).
