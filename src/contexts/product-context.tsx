'use client';

import { ProductType } from "@/components/organisms/products-container";
import React, { createContext, useEffect, useState } from "react";

export type ProductContextTypes = {
    productList: ProductType[],
    productCount: number,
    maxPrice: number,
    categoryList: string[]
}

export const ProductContext = createContext<ProductContextTypes | null>(null);

export default function PContext({ children, _productList, _productCount }: { _productList: ProductType[], _productCount: number, children: React.ReactNode }) {
    const [productList, setProductList] = useState<ProductType[] | []>([]);
    const [productCount, setProductCount] = useState<number>(0);
    
    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [categoryList, setCategoryList] = useState<string[] | []>([]);


    useEffect(() => {
        setProductList(_productList);
        setProductCount(_productCount);
        setCategoryList([...new Set(_productList.map((p) => p.category))]);
        setMaxPrice(Math.max(..._productList.map((p) => p.price)) + 1);
    }, [_productCount, _productList])
   

    return <ProductContext.Provider value={{
        productList,
        productCount,
        maxPrice,
        categoryList,
    }}>
        {children}
    </ProductContext.Provider>
}