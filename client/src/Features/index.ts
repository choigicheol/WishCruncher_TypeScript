import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import login from "./loginSlice";

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // login reducer만 localstorage에 저장
  whitelist: ["login"],
  // blacklist -> 제외할거
};

const rootReducer = combineReducers({
  login,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
