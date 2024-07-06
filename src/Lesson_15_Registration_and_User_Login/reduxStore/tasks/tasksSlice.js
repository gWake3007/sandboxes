import { createSlice } from "@reduxjs/toolkit";
import { createTaskOperation, getAllTasksOperation } from "./operationsTasks";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTasksOperation.fulfilled, (state, { payload }) => {
        state.tasks = payload;
      })
      .addCase(createTaskOperation.fulfilled, (state, { payload }) => {
        state.tasks.push(payload);
      });
  },
});
//?state.tasks.push(payload);
//?При створенні tasks ми пушимо до наших tasks сам payload(в данному випадку це об'єкт з данними про таску з id та данними)

export const tasksReducer = tasksSlice.reducer;
