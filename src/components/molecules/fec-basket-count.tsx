'use client';

import FECTypo from "../atoms/fec-typo";
import { useTranslations } from "next-intl";
import { useBasketContext } from "@/hooks/useBasketContext";
import BContext from "@/contexts/basket-context";

export default function FECBasketCount() {
    const t = useTranslations('frontEndCase')
    const { basketItems } = useBasketContext();

    if (basketItems.length === 0)
        return <div />

    return <FECTypo>{t('selectedProductCount', { count: basketItems.length })}</FECTypo>
    
}