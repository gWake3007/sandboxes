import { createSlice } from "@reduxjs/toolkit";
import { fetchTodo } from "./todoThunks";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: null,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.todo = payload.todo;
      })
      .addCase(fetchTodo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const todoReducer = todoSlice.reducer;

//?Якщо працюємо з бек-Ендом то одразу в initialState додаємо isLoading та error. Тобто опрацювуємо всі стани не в компоненті а в слайсі!
//?extraReducers - потрібен для редюсера який був створенний не в слайсі(в нашому випадку в todoThunks - тобто з запиту з бек-Енду).
