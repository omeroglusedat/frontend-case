'use client';

import { Stack } from "@mui/material";
import FECContainer from "../atoms/fec-container";
import FECProductImage from "../atoms/fec-product-image";
import { ProductType } from "./products-container";
import FECTypo from "../atoms/fec-typo";
import ReviewsIcon from '@mui/icons-material/Reviews';
import FECAddBasketButton from "../molecules/fec-add-basket-button";
import useResponsive from "@/hooks/useResponsive";


export default function ProductDetail({ product }: { product: ProductType }) {
    const { isMobile } = useResponsive();
    const { image, title, category, rating, description, price, id } = product;

    return <FECContainer sx={{ display: 'flex', flexDirection: ['column', 'column', 'column', 'row', 'row'], gap: 2, mt: 1 }}>
        <FECProductImage src={image} width={['100%', '100%', '400px', '400px', '400px']} height={'400px'} />
        <Stack direction={'column'} gap={1} width={'80%'}>
            <FECTypo>{category}</FECTypo>
            <FECTypo>{title}</FECTypo>
            <FECTypo>{description}</FECTypo>

            <Stack direction={'row'} gap={.5} alignItems={'center'}>
                <ReviewsIcon fontSize={'small'} color={'warning'} />
                <FECTypo>{rating.count}</FECTypo>
            </Stack>
            <Stack width={isMobile ? '100%' : 'max-content'}>
                <FECAddBasketButton id={id} price={price} />
            </Stack>
        </Stack>
    </FECContainer>
}