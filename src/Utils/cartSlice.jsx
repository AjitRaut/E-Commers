import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload);
    },
    removeitem: (state) => {
      state.items.pop();
    },
    cartclear: (state) => {
      state.items.length = 0;
    },
    setSource: (state, action) => {
      state.source = action.payload;
    },
  },
});

export const { additem, removeitem, cartclear , setSource } = cartslice.actions;
export default cartslice.reducer;
