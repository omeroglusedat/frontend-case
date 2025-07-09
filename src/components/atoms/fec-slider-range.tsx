'use client';

import { ProductSliceType } from "@/redux/product-slice";
import { Slider, Stack } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function valuetext(value: number) {
    return `${value}`;
}

export default function FECSliderRange() {
    const maxPrice = useSelector((state: { productSlice: ProductSliceType }) => state.productSlice.maxPrice);
    const [value, setValue] = useState<number[]>([0, maxPrice]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const rangePrice = searchParams.get('rangePrice');

    useEffect(() => {
        setValue([rangePrice ? Number(rangePrice.split(',')[0]) : 0, rangePrice ? Number(rangePrice.split(',')[1]) : maxPrice]);
    }, [maxPrice, rangePrice])

    const handleChange = (event: Event, newValue: number[]) => {
        setValue(newValue);
        const params = new URLSearchParams(searchParams.toString());
        params.set('rangePrice', newValue.toString());
        router.replace(`?${params.toString()}`);
    };
    return <Stack sx={{ width: '100%' }}>
        <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange as any}
            min={0}
            max={maxPrice}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
        />
    </Stack>
}