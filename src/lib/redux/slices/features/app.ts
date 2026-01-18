import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { requestTypes } from "@/lib/redux/types";

const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    initializeCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const incrementAsync = () => ({
  type: requestTypes.incrementAsyncRequest,
});

export const { initializeCount, decrement, increment } = slice.actions;
export default slice.reducer;