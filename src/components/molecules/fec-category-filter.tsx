'use client';

import { useState } from "react";
import FECSelect from "../atoms/fex-select";
import { ProductSliceType } from "@/redux/product-slice";
import { useSelector } from "react-redux";
import { MenuItem, SelectChangeEvent } from "@mui/material";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";

export default function FECCategoryFilter() {
    const t = useTranslations('frontEndCase');
    const categoryList = useSelector((state: { productSlice: ProductSliceType }) => state.productSlice.categoryList);
    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const [value, setValue] = useState<string>(category || '')

    const handleChange = (e: SelectChangeEvent) => {
        setValue(e.target.value);
        const params = new URLSearchParams(searchParams.toString());
        params.set('category', e.target.value.toString());
        router.replace(`?${params.toString()}`);
    }

    return <FECSelect label={t('categoryFilter')} value={value} onChange={(e) => handleChange(e as SelectChangeEvent)}>
        <MenuItem value={''} disabled>{t('pleaseSelect')}</MenuItem>
        {
            categoryList.map((category, index) => (
                <MenuItem key={`cat-item-${index}`} value={category}>{category}</MenuItem>
            ))
        }
    </FECSelect>
}