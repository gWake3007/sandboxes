import { createSlice } from "@reduxjs/toolkit";
import { deleteTodo, fetchTodo } from "./todoThunks";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: null,
    isLoading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchTodo.fulfilled, (state, { payload }) => {
        state.error = "";
        state.todo = payload.todos;
        state.isLoading = false;
      })
      .addCase(fetchTodo.rejected, (state) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(deleteTodo.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(deleteTodo.fulfilled, (state, { payload }) => {
        state.error = "";
        state.todo = state.todo.filter((el) => el.id !== payload.id);
        state.isLoading = false;
      })
      .addCase(deleteTodo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

//?console.log(payload); - консоль працює тому що ми відловили помилку в todoThunks.js за допомогою thunkAPI.

export const todoReducer = todoSlice.reducer;

//?Якщо працюємо з бек-Ендом то одразу в initialState додаємо isLoading та error. Тобто опрацювуємо всі стани не в компоненті а в слайсі!
//?extraReducers - потрібен для редюсера який був створенний не в слайсі(в нашому випадку в todoThunks - тобто з запиту з бек-Енду).

//?      .addCase(fetchTodo.fulfilled, (state, { payload }) => {
//?    state.todo = payload.todos;
//?    state.isLoading = false;
//?  })
//?В цьому кейсі звертаємось так state.todo = payload.todos тому що в бекенді ми до масиву об'єктів з данними так звертаємось.

//?selectTodo - Функція поза межами компоненту TodoPage.Створенна щоб уникнути дублювання коду.
export const selectTodo = (state) => state.todo.todo;
export const selectFilter = (state) => state.filter.filterText;
export const selectLoading = (state) => state.todo.isLoading;
export const selectError = (state) => state.todo.error;
