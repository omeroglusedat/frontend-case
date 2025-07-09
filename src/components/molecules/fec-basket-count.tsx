'use client';

import { useSelector } from "react-redux";
import FECTypo from "../atoms/fec-typo";
import { ProductSliceType } from "@/redux/product-slice";
import { useTranslations } from "next-intl";

export default function FECBasketCount() {
    const t = useTranslations('frontEndCase')
    const basketCount = useSelector((state: { productSlice: ProductSliceType }) => state.productSlice.basketItems.length);

    if (basketCount === 0)
        return <div />

    return <FECTypo>{t('selectedProductCount', { count: basketCount })}</FECTypo>
}