import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const productstore = configureStore({
    reducer:{
        cart:cartReducer,
    },
})

export default productstore;