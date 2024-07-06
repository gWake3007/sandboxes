import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: null,
  },
});

export const tasksReducer = tasksSlice.reducer;
