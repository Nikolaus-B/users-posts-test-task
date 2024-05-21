import { createSlice } from "@reduxjs/toolkit";
import { PostsState } from "../../interfaces/Posts";
import { fetchUserPosts } from "./postsThunk";

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserPosts.fulfilled, (state, action) => {
      state.posts = [...action.payload];
    });
  },
});

// export const { } = usersSlice.actions;
const postsReducer = postsSlice.reducer;
export default postsReducer;
