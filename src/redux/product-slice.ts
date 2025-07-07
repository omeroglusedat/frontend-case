import { ProductType } from "@/components/organisms/products-container";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductSliceType {
    productList: ProductType[] | null,
    basketItems: ProductType[];
}

const initialState: ProductSliceType = {
    productList: null,
    basketItems: [],
}

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setProductList: (state, action: PayloadAction<ProductType[]>) => {
            state.productList = action.payload
        },
        addBasketItem: (state, action: PayloadAction<number>) => {
            if (state.productList) {
                state.basketItems.push(state.productList.filter((f) => f.id === action.payload)[0]);
                localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
            }
        },
        removeBasketItem: (state, action: PayloadAction<number>) => {
            state.basketItems = state.basketItems.filter((f) => f.id !== action.payload);
            localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
        },
        setBasketItems: (state, action: PayloadAction<ProductType[]>) => {
            state.basketItems = action.payload
        }
    }
});

export const getProductInformation = (state: any) => state.productSlice

export const {
    setProductList,
    addBasketItem,
    removeBasketItem,
    setBasketItems
} = productSlice.actions;

export default productSlice.reducer;
