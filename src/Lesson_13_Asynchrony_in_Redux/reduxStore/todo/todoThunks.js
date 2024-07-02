import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export const fetchTodo = createAsyncThunk("todo/fetchAllTodo", async () => {
  const { data } = await axios("/todos");
  return data;
});

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/todos/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//?createAsyncThunk() - для запиту на бек-Енд і щоб @reduxjs/toolkit його автоматично опрацював!
//?thunkAPI.rejectWithValue(error); - більш грамотна обробка помилки. За допомогою thunkAPI.
