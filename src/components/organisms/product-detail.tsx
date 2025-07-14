'use client';

import FECContainer from "../atoms/fec-container";
import FECProductImage from "../atoms/fec-product-image";
import { ProductType } from "./products-container";
import FECTypo from "../atoms/fec-typo";
import FECAddBasketButton from "../molecules/fec-add-basket-button";
import { useTranslations } from "next-intl";
import FECStack from "../atoms/fec-stack";
import { useEffect, useState } from "react";
import { MdOutlineReviews } from "react-icons/md";


export default function ProductDetail({ product }: { product: ProductType }) {
    const t = useTranslations('frontEndCase');
    const { image, title, category, rating, description, price, id } = product;
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (id)
            setIsLoading(false);
    }, [id])

    if (isLoading)
        return <FECTypo>{t('loading')}</FECTypo>

    return <FECContainer variants={'media'}
        style={{
            display: 'flex',
            gap: '20px',
            marginTop: '10px'
        }}>
        <FECProductImage src={image} width={'400px'} height={'400px'} />
        <FECStack style={{
            gap: '10px',
            width: '80%'
        }} >
            <FECTypo>{category}</FECTypo>
            <FECTypo>{title}</FECTypo>
            <FECTypo>{description}</FECTypo>

            <FECStack style={{
                flexDirection: 'row',
                gap: '10px',
                alignItems: 'center'
            }}>
                <MdOutlineReviews fontSize={'16px'} color={'orange'} />
                <FECTypo>{rating.rate}</FECTypo>
            </FECStack>
            <FECStack
                mobilestyles={`
                    width: 100% !important;
                `}
                style={{ width: 'max-content' }} >
                <FECAddBasketButton id={id} price={price} />
            </FECStack>
        </FECStack>
    </FECContainer>
}