'use client';

import { Stack } from "@mui/material";
import FECTypo from "../atoms/fec-typo";
import FECSortPrice from "../molecules/fec-sort-price";
import FECCategoryFilter from "../molecules/fec-category-filter";
import FECSliderRange from "../atoms/fec-slider-range";
import { useTranslations } from "next-intl";
import FECClearFilter from "../molecules/fec-clear-filter";
import useResponsive from "@/hooks/useResponsive";

export default function FiltersArea() {
    const t = useTranslations('frontEndCase');
    const { isMobile } = useResponsive();

    return <Stack
        direction={'column'}
        width={['100%', '100%', '100%', '20%', '20%']}
        height={'max-content'}
        bgcolor={'white'}
        position={'sticky'}
        m={isMobile ? 1 : 0}
        pb={1}
        zIndex={isMobile && '1300' as any}
        top={['7vh', '7vh', '7vh', '8vh', '8vh']} gap={1}>
        <FECSortPrice />
        <FECCategoryFilter />
        <Stack>
            <FECTypo fontSize={'12px'}>{t('priceRange')}</FECTypo>
            <FECSliderRange />
        </Stack>
        <FECClearFilter />
    </Stack>

}