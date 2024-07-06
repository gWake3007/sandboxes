import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://goit-task-manager.herokuapp.com/";

export const registerOperation = createAsyncThunk(
  "auth/register",
  async (userData, { rejectedWithValue }) => {
    try {
      const { data } = await axios.post("users/signup", userData);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const loginOperation = createAsyncThunk(
  "auth/login",
  async (userData, { rejectedWithValue }) => {
    try {
      const { data } = await axios.post("users/login", userData);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);
