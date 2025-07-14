'use client';

import { useState } from "react";
import FECSelect from "../atoms/fec-select";

import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useProductContext } from "@/hooks/useProductContext";

export default function FECCategoryFilter() {
    const t = useTranslations('frontEndCase');
    const { categoryList } = useProductContext();
    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const [value, setValue] = useState<string>(category || '')

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
        const params = new URLSearchParams(searchParams.toString());
        params.set('category', e.target.value.toString());
        router.replace(`?${params.toString()}`);
    }

    return <FECSelect label={t('categoryFilter')} value={value} onChange={(e) => handleChange(e)}>
        <option value={''} disabled>{t('pleaseSelect')}</option>
        {
            categoryList.map((category, index) => (
                <option key={`cat-item-${index}`} value={category}>{category}</option>
            ))
        }
    </FECSelect>
}