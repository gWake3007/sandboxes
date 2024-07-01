import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/";

export const fetchTodo = createAsyncThunk("todo/fetchAllTodo", async () => {
  const { data } = await axios("todos");
  return data;
});

//?createAsyncThunk() - для запиту на бек-Енд і щоб @reduxjs/toolkit його автоматично опрацював!
