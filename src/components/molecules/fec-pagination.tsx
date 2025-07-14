'use client';


import FECPaginationItem from "../atoms/fec-pagination-item";
import { useProductContext } from "@/hooks/useProductContext";
import FECStack from "../atoms/fec-stack";

export default function FECPagination() {
    const { productCount } = useProductContext();
    const pages = Array.from({ length: Math.ceil(productCount / 10) }, (_, i) => i + 1);


    return <FECStack style={{
        flexDirection: 'row', gap: '10px'
    }}>
        {
            pages.map((item, index) => (
                <FECPaginationItem key={`pagination-item-${index}`} value={item} />
            ))
        }
    </FECStack>

}