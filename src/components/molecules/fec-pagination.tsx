'use client';

import { ProductSliceType } from "@/redux/product-slice";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FECPaginationItem from "../atoms/fec-pagination-item";

export default function FECPagination() {
    const productListLength = useSelector((state: { productSlice: ProductSliceType }) => state.productSlice.productLength);
    const pages = Array.from({ length: Math.ceil(productListLength / 10) }, (_, i) => i + 1);


    return <Stack direction={'row'} gap={1}>
        {
            pages.map((item, index) => (
                <FECPaginationItem key={`pagination-item-${index}`} value={item} />
            ))
        }
    </Stack>

}