'use client';

import { ProductType } from "@/components/organisms/products-container";
import { useProductContext } from "@/hooks/useProductContext";
import { useSearchParams } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export type BasketContextTypes = {
    basketItems: ProductType[] | [],
    addBasketItem: (productId: number) => void,
    removeBasketItem: (productId: number) => void
}

export const BasketContext = createContext<BasketContextTypes | null>(null)

export default function BContext({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams();
    const { productList } = useProductContext();
    const [basketItems, setBasketItems] = useState<ProductType[] | []>([]);

    useEffect(() => {
        const getBasketItems = JSON.parse(localStorage.getItem('basketItems') as any) || [];
        setBasketItems(getBasketItems);
    }, [searchParams]);

    return <BasketContext.Provider value={{
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
    </BasketContext.Provider>
}