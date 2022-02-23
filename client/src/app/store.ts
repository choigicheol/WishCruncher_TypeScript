import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import test from "../features/counter/test";

export const store = configureStore({
  reducer: {
    gigi: counterReducer,
    test: test,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
