import { createSlice } from "@reduxjs/toolkit";
import { LoginState } from "../Interface/interface";

const initialState: LoginState = {
  isLogin: false,
  id: null,
  accessToken: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = true;
      state.id = action.payload.id;
      state.accessToken = action.payload.accessToken;
    },
    setLogout: (state) => {
      state.isLogin = false;
      state.id = null;
      state.accessToken = null;
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;

export default loginSlice.reducer;
