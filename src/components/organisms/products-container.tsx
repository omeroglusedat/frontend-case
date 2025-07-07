'use client';

import { useEffect } from "react";
import FECContainer from "../atoms/fec-container";
import FiltersArea from "./filters-area";
import ProductList from "./product-list";
import { useDispatch } from "react-redux";
import { setProductList } from "@/redux/product-slice";


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
export default function ProductsContainer({ productList }: { productList: ProductType[] }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setProductList(productList));
    }, [productList])

    return <FECContainer sx={{ display: 'flex', flexDirection: ['column', 'column', 'column', 'row', 'row'], gap: 4, position: 'relative', mt: 1, mb: 1 }}>
        <FiltersArea />
        <ProductList />
    </FECContainer>
}