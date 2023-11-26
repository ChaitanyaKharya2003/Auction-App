import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player: [],
};

export const adminDataSlice = createSlice({
  name: "adminData",
  initialState,
  reducers: {
    playerData: (state, { payload }) => {
      state.player = payload?.player;
    },
  },
});

export const UserDataAction = adminDataSlice.actions;

export default adminDataSlice.reducer;
