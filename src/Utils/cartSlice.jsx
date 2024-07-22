import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    normal_item: [],
    nested_items: [],
  },
  reducers: {
    normal_Additem: (state, action) => {
      state.normal_item.push(action.payload);
    },
    nested_additem: (state, action) => {
      state.nested_items.push(action.payload);
    },
    removeitem: (state) => {
      state.items.pop();
    },
    cartclear: (state) => {
      state.items.length = 0;
    },
  },
});

export const { normal_Additem, nested_additem, removeitem, cartclear } =
  cartslice.actions;
export default cartslice.reducer;
