'use client'

import FECSelect from "../atoms/fec-select"
import { useTranslations } from "next-intl"
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function FECSortPrice() {
    const t = useTranslations('frontEndCase');
    const router = useRouter();
    const searchParams = useSearchParams();
    const sort = searchParams.get('sort');
    const [value, setValue] = useState<string>(sort || '')

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort',  e.target.value.toString());
        router.replace(`?${params.toString()}`);
    }

    return <FECSelect label={t('sortPrice')} value={value} onChange={(e) => handleChange(e)}>
        <option value={''} disabled>{t('pleaseSelect')}</option>
        <option value={'asc'}>{t('ascSort')}</option>
        <option value={'desc'}>{t('descSort')}</option>
    </FECSelect>
}