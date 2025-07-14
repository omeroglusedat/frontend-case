'use client';

import { ProductType } from "@/components/organisms/products-container";
import { useSearchParams } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

export type ProductContextTypes = {
    productList: ProductType[],
    productCount: number,
    maxPrice: number,
    categoryList: string[],
    basketItems: ProductType[] | [],
    addBasketItem: (productId: number) => void,
    removeBasketItem: (productId: number) => void
}

export const ProductContext = createContext<ProductContextTypes | null>(null);

export default function PContext({ children, _productList, _productCount }: { _productList: ProductType[], _productCount: number, children: React.ReactNode }) {
    const searchParams = useSearchParams();
    const [productList, setProductList] = useState<ProductType[] | []>([]);
    const [productCount, setProductCount] = useState<number>(0);
    const [basketItems, setBasketItems] = useState<ProductType[] | []>([]);
    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [categoryList, setCategoryList] = useState<string[] | []>([]);


    useEffect(() => {
        setProductList(_productList);
        setProductCount(_productCount);
        setCategoryList([...new Set(_productList.map((p) => p.category))]);
        setMaxPrice(Math.max(..._productList.map((p) => p.price)) + 1);
    }, [_productCount, _productList])


    useEffect(() => {
        const getBasketItems = JSON.parse(localStorage.getItem('basketItems') as any) || [];
        setBasketItems(getBasketItems);
    }, [searchParams]);

    return <ProductContext.Provider value={{
        productList,
        productCount,
        maxPrice,
        categoryList,
        basketItems,
        addBasketItem: (productId) => {
            if (productList) {
                const basketArr = [...basketItems];
                basketArr.push(productList.filter((f) => f.id === productId)[0]);
                localStorage.setItem('basketItems', JSON.stringify(basketArr));
                setBasketItems(basketArr);
            }
        },
        removeBasketItem: (productId) => {
            let basketArr = [...basketItems];
            basketArr = basketArr.filter((f) => f.id !== productId);
            localStorage.setItem('basketItems', JSON.stringify(basketArr));
            setBasketItems(basketArr);
        }
    }}>
        {children}
    </ProductContext.Provider>
}