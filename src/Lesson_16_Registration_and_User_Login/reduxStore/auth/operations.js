import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://auth-backend-lesson.herokuapp.com/api/";

//?Забираємо Токен авторизації щоб пізніше діставатися до tasks які доступні післе авторизації!
const SetHeaderToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
//?Чистка токена для того якщо користувач введе марштур в ручну.Щоб він не був авторизований.
const ClearHeaderToken = () => {
  // axios.defaults.headers.common["Authorization"] = "";
  delete axios.defaults.headers.common["Authorization"];
};

export const registerOperation = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("users/signup", userData);
      SetHeaderToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginOperation = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("users/login", userData);
      SetHeaderToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginOutOperation = createAsyncThunk(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("users/logOut");
      ClearHeaderToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
