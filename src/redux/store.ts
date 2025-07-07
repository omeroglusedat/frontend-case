import { configureStore } from "@reduxjs/toolkit";
import productReducer from '@/redux/product-slice'


export const store = configureStore({
    reducer: {
        productSlice: productReducer
    }
});