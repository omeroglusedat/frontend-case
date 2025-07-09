'use client';

import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { ProductSliceType } from "@/redux/product-slice";
import FECProductCard from "../molecules/fec-product-card";
import FECPagination from "../molecules/fec-pagination";
import FECInput from "../atoms/fec-input";
import { useEffect, useState } from "react";
import { ProductType } from "./products-container";
import { useSearchParams } from "next/navigation";

export default function ProductList() {
    const productList = useSelector((state: { productSlice: ProductSliceType }) => state.productSlice.productList);
    const [searchText, setSearchText] = useState<string>('');
    const [filtered, setFiltered] = useState<ProductType[] | null>(null);
    const searchParams = useSearchParams();
    const sort = searchParams.get('sort');
    const category = searchParams.get('category');
    const rangePrice = searchParams.get('rangePrice');

    useEffect(() => {
        if (productList)
            setFiltered(productListSortOperation(productList));
    }, [productList, searchParams, searchText]);

    const productListSortOperation = (_productList: ProductType[]) => {
        let pList = [..._productList];

        if (sort) {
            if (sort === 'asc')
                pList = [...pList].sort((a, b) => a.price - b.price);
            if (sort === 'desc')
                pList = [...pList].sort((a, b) => b.price - a.price);
        }

        if (category)
            pList = [...pList].filter((f) => f.category === category);

        if (rangePrice) {
            const minPrice = rangePrice.split(',')[0];
            const maxPrice = rangePrice.split(',')[1];
            pList = [...pList].filter((f) => f.price >= Number(minPrice) && f.price <= Number(maxPrice))

        }


        if (searchText !== '')
            pList = pList.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()))
        return pList
    }

    return <Stack
        minHeight={'90vh'}
        width={['100%', '100%', '100%', '80%', '80%']}
        direction={'column'}
        alignItems={'center'}
        gap={1}>
        <FECInput value={searchText} onChange={(e) => setSearchText(e.target.value)} />
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