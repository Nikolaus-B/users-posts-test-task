import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`users`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);
