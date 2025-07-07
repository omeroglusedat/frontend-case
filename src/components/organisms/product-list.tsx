'use client';

import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { ProductSliceType } from "@/redux/product-slice";
import FECProductCard from "../molecules/fec-product-card";

export default function ProductList() {
    const productList = useSelector((state: { productSlice: ProductSliceType }) => state.productSlice.productList);
    return <Stack
        minHeight={'90vh'}
        width={['100%', '100%', '100%', '80%', '80%']}
        height={'auto'}
        direction={['column', 'column', 'column', 'row', 'row']}
        gap={1}
        flexWrap={'wrap'}>
        {
            productList && productList.map((product, item) => (
                <FECProductCard product={product} />
            ))
        }
    </Stack>

}