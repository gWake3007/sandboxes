import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterText: "",
  },
  reducers: {
    changeFilterText(state, { payload }) {
      state.filterText = payload;
    },
  },
});

export const { changeFilterText } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
