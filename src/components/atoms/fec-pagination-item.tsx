'use client';

import FECTypo from "./fec-typo";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FECStack from "./fec-stack";

export default function FECPaginationItem({ value }: { value: number }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const handleClick = () => {
        const params = new URLSearchParams(searchParams.toString());
        router.push(`${pathname.substring(0, pathname.length - 1)}${value}?${params.toString()}`);
    }
    
    return <FECStack
        hover={`
            {
                cursor: pointer;
            }
        `}
        style={{
            border: '1px solid lightgray',
            borderRadius: '8px',
            width: 'max-content',
            backgroundColor: Number(pathname.split('/')[3]) === value ? 'lightgray' : 'white',
        }}
        onClick={handleClick}>
        <FECTypo style={{ margin: '10px' }}>
            {value}
        </FECTypo>
    </FECStack>

}