'use client';

import { Divider, Stack } from "@mui/material";
import { ProductType } from "../organisms/products-container";
import FECProductImage from "../atoms/fec-product-image";
import FECTypo from "../atoms/fec-typo";
import FECButton from "../atoms/fec-button";
import ReviewsIcon from '@mui/icons-material/Reviews';
import FECAddBasketButton from "./fec-add-basket-button";
import { useRouter } from "next/navigation";

export default function FECProductCard({ product }: { product: ProductType }) {
    const router = useRouter();


    return <Stack
        sx={{
            width: ['100%', '100%', '100%', '23%', '23%'],
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;',
            borderRadius: '10px',
            height: '333px',
            zIndex: 9,
            transition: '.5s',
            '&:hover': {
                cursor: 'pointer',
                background: '#f5f2f2'
            }
        }}
        onClick={() => {
            router.push(`/products/${product.id}`)
        }}>
        <Stack width={'93%'} height={'100%'} direction={'column'} justifyContent={'start'} alignItems={'center'} m={1} gap={2}>
            <FECProductImage src={product.image} />
            <Stack direction={'column'} width={'100%'} justifyContent={'space-between'} height={'100%'}>
                <Stack direction={'column'} width={'100%'} gap={1}>
                    <FECTypo width={'100%'} fontWeight={'bold'} fontSize={'12px'}>{product.category}</FECTypo>
                    <FECTypo width={'100%'} fontSize={'14px'} sx={{
                        display: '-webkit-box',
                        '-webkit-line-clamp': '2',
                        '-webkit-box-orient': 'vertical',
                        'overflow': 'hidden',
                        textOverflow: 'ellipsis'
                    }}>{product.title}</FECTypo>
                    <Stack direction={'row'} gap={.2}>
                        <ReviewsIcon fontSize={'small'} color={'warning'} />
                        <FECTypo fontSize={'12px'}>{product.rating.rate}</FECTypo>
                    </Stack>
                </Stack>
                <FECAddBasketButton id={product.id} price={product.price} />
            </Stack>
        </Stack>
    </Stack>
}