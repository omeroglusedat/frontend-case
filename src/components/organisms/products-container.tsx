'use client';

import { useEffect, useState } from "react";
import FECContainer from "../atoms/fec-container";
import FiltersArea from "./filters-area";
import ProductList from "./product-list";

import { useProductContext } from "@/hooks/useProductContext";
import { useTranslations } from "next-intl";


export type ProductType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: RatingType
}

type RatingType = {
    rate: number,
    count: number
}
export default function ProductsContainer() {
    const t = useTranslations('frontEndCase');
    const { productCount } = useProductContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (productCount) {
            setIsLoading(false);
        }
    }, [productCount]);


    if (isLoading) {
        return <div style={{ padding: 40 }}>{t('loading')}</div>;
    }


    return <FECContainer
        variants={'media'}
        style={{
            display: 'flex',
            gap: '30px',
            position: 'relative',
            marginTop: 1,
            marginBottom: 1
        }}>
        <FiltersArea />
        <ProductList />
    </FECContainer>
}