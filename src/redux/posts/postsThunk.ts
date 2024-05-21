import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPost } from "../../interfaces/Posts";

export const fetchUserPosts = createAsyncThunk<IPost[], number>(
  "posts/fetchUserPosts",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`posts?userId=${userId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);
