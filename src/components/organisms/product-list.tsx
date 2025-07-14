'use client';

import FECProductCard from "../molecules/fec-product-card";
import FECPagination from "../molecules/fec-pagination";
import FECInput from "../atoms/fec-input";
import { useEffect, useState } from "react";
import { ProductType } from "./products-container";
import { useSearchParams } from "next/navigation";
import { useProductContext } from "@/hooks/useProductContext";
import FECSelect from "../atoms/fec-select";
import FECStack from "../atoms/fec-stack";

export default function ProductList() {
    const searchParams = useSearchParams();
    const sort = searchParams.get('sort');
    const category = searchParams.get('category');
    const rangePrice = searchParams.get('rangePrice');

    const { productList } = useProductContext();
    const [searchText, setSearchText] = useState<string>('');
    const [filtered, setFiltered] = useState<ProductType[] | null>(null);


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

    return <FECStack
        mobilestyles={`
            width: 100% !important;
        `}
        style={{
            minHeight: '90vh',
            width: '80%',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
        }}>
        <FECStack style={{ flexDirection: 'row', gap: '10px', width: '100%' }}>
            <FECInput value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </FECStack>
        <FECStack
            style={{
                height: 'auto',
                width: '100%',
            }}>
            <FECStack mobilestyles={`
                    flex-direction: column;
                    margin: 10px;
                    width: 95.5% !important;
                `}
                style={{
                    height: 'auto',
                    width: '100%',
                    flexDirection: 'row',
                    gap: '10px',
                    flexWrap: 'wrap'
                }}>
                {
                    filtered && filtered.map((product, index) => (
                        <FECProductCard key={`product-item-${index}`} product={product} />
                    ))
                }
            </FECStack>
        </FECStack>
        <FECPagination />
    </FECStack>
}