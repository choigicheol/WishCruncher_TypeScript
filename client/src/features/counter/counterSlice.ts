import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: "gicheol",
};

export const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    add: (state) => {
      state.value += "a";
    },
    init: (state) => {
      state.value = "gicheol";
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { add, init, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
