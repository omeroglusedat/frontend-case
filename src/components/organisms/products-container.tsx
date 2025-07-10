'use client';

import { useEffect } from "react";
import FECContainer from "../atoms/fec-container";
import FiltersArea from "./filters-area";
import ProductList from "./product-list";
import { useDispatch } from "react-redux";
import { setProductLength, setProductList } from "@/redux/product-slice";
import useResponsive from "@/hooks/useResponsive";


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
export default function ProductsContainer({ productList, productCount }: { productList: ProductType[], productCount: number }) {
    const dispatch = useDispatch();
    const { isMobile } = useResponsive();
    useEffect(() => {
        dispatch(setProductList(productList));
        dispatch(setProductLength(productCount));
    }, [productList])

    return <FECContainer sx={{ display: 'flex', flexDirection: ['column', 'column', 'column', 'row', 'row'], gap: 4, position: 'relative', mt: 1, mb: 1 }}>
        {!isMobile && <FiltersArea />}
        <ProductList />
    </FECContainer>
}