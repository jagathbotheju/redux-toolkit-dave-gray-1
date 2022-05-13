import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Dude Lebowski" },
  { id: 2, name: "Neil Yound" },
  { id: 3, name: "Dave Gray" }
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
});

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
