'use client';

import FECTypo from "../atoms/fec-typo";
import { useTranslations } from "next-intl";
import { useProductContext } from "@/hooks/useProductContext";

export default function FECBasketCount() {
    const t = useTranslations('frontEndCase')
    const { basketItems } = useProductContext();

    if (basketItems.length === 0)
        return <div />

    return <FECTypo>{t('selectedProductCount', { count: basketItems.length })}</FECTypo>
}