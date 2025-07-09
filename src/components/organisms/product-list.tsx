'use client';

import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { ProductSliceType } from "@/redux/product-slice";
import FECProductCard from "../molecules/fec-product-card";
import FECPagination from "../molecules/fec-pagination";
import FECInput from "../atoms/fec-input";
import { useState } from "react";
import { ProductType } from "./products-container";

export default function ProductList() {
    const productList = useSelector((state: { productSlice: ProductSliceType }) => state.productSlice.productList);
    const [searchText, setSearchText] = useState<string>('');

    const filtered: ProductType[] | null = productList && productList.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return <Stack
        minHeight={'90vh'}
        width={['100%', '100%', '100%', '80%', '80%']}
        direction={'column'}
        alignItems={'center'}
        gap={1}>
        <FECInput value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        <Stack
            height={'auto'}
            direction={['column', 'column', 'column', 'row', 'row']}
            gap={1}
            flexWrap={'wrap'}>
            {
                filtered && filtered.map((product, index) => (
                    <FECProductCard key={`product-item-${index}`} product={product} />
                ))
            }
        </Stack>
        <FECPagination />
    </Stack>
}