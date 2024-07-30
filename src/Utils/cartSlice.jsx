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
    removenormal_item: (state) => {
      state.normal_item.pop();
    },
    removenested_items: (state) => {
      state.nested_items.pop();
    },
    
    cartclear: (state) => {
      state.normal_item = [] ;
      state.nested_items = [] ;
    },
  },
});

export const { normal_Additem, nested_additem,  removenormal_item, removenested_items, cartclear } =
  cartslice.actions;
export default cartslice.reducer;
