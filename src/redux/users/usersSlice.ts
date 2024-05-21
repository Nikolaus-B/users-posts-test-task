import { createSlice } from "@reduxjs/toolkit";
import { UsersState } from "../../interfaces/Users";
import { fetchUsers } from "./usersThunk";

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = [...action.payload];
    });
  },
});

// export const { } = usersSlice.actions;
const usersReducer = usersSlice.reducer;
export default usersReducer;
