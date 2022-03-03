import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../Interface/interface";

const initialState: UserInfo = {
  email: "",
  nickname: "",
  loginType: false,
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
      state.loginType = action.payload.loginType;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
