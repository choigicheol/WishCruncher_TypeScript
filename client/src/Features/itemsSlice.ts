import { createSlice } from "@reduxjs/toolkit";
import { ItemInfo } from "../Interface/interface";

const initialState: any = { data: [] };

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.data = action.payload;
    },
    addItems: (state, action) => {
      state.data = [action.payload, ...state.data];
    },
  },
});

export const { setItems, addItems } = itemsSlice.actions;

export default itemsSlice.reducer;
