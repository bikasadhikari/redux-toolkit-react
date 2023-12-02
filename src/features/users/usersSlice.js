import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Bikas Adhikari" },
  { id: "1", name: "Mohit Kumawat" },
  { id: "2", name: "Ajay Vaishnav" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
