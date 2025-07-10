'use client';

import { Stack } from "@mui/material";
import FECTypo from "./fec-typo";
import { useRouter, useSearchParams } from "next/navigation";

export default function FECPaginationItem({ value }: { value: number }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const page = searchParams.get('p') || '1';

    const handleClick = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('p', value.toString());
        router.replace(`?${params.toString()}`);
    }
    return <Stack
        sx={{
            border: '1px solid lightgray',
            borderRadius: '8px',
            width: 'max-content',
            bgcolor: Number(page) === value ? 'lightgray' : 'white',
            '&:hover': {
                cursor: "pointer"
            }
        }}
        onClick={handleClick}>
        <FECTypo m={1}>
            {value}
        </FECTypo>
    </Stack>

}