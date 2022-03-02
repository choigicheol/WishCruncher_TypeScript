import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loginReducer from "../Features/loginSlice";
import { persistStore } from "redux-persist";
import rootReducer from "../Features/index";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
