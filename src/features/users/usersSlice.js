import { createSlice } from "@reduxjs/toolkit";
import getAllPeopleTeam from "../../services/getAllPeopleTeam";
const initilState = await getAllPeopleTeam()

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState: initilState,
  reducers: {},
});

//export const { } = usersSlice.actions;
export default usersSlice.reducer;