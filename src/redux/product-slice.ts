import { ProductType } from "@/components/organisms/products-container";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductSliceType {
    productList: ProductType[] | null,
    productLength: number
    basketItems: ProductType[],
    categoryList: string[],
    maxPrice: number
}

const initialState: ProductSliceType = {
    productList: null,
    productLength: 0,
    basketItems: [],
    categoryList: [],
    maxPrice: 0
}

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setProductList: (state, action: PayloadAction<ProductType[]>) => {
            state.productList = action.payload;
            state.categoryList = [...new Set(state.productList.map((p) => p.category))];
            state.maxPrice = Math.max(...state.productList.map((p) => p.price));
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
        },
        setProductLength: (state, action: PayloadAction<number>) => {
            state.productLength = action.payload
        }
    }
});

export const getProductInformation = (state: any) => state.productSlice

export const {
    setProductList,
    addBasketItem,
    removeBasketItem,
    setBasketItems,
    setProductLength
} = productSlice.actions;

export default productSlice.reducer;
