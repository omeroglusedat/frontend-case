'use client';

import { Stack } from "@mui/material";
import FECTypo from "../atoms/fec-typo";
import FECSortPrice from "../molecules/fec-sort-price";
import FECCategoryFilter from "../molecules/fec-category-filter";
import FECSliderRange from "../atoms/fec-slider-range";
import { useTranslations } from "next-intl";
import FECClearFilter from "../molecules/fec-clear-filter";

export default function FiltersArea() {
    const t = useTranslations('frontEndCase');

    return <Stack
        direction={'column'}
        width={'20%'}
        height={'max-content'}
        bgcolor={'white'}
        position={'sticky'}
        top={'8vh'} gap={1}>
        <FECSortPrice />
        <FECCategoryFilter />
        <Stack>
            <FECTypo fontSize={'12px'}>{t('priceRange')}</FECTypo>
            <FECSliderRange />
        </Stack>
        <FECClearFilter />
    </Stack>

}