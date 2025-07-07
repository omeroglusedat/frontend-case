'use client';

import { Stack } from "@mui/material";
import Image from "next/image";


export default function FECProductImage(props: { src: string, width?: string | string[], height?: string }) {
    const { src, width = '100%', height = '100%' } = props;

    return <Stack sx={{ position: 'relative', width, height }}>
        <Image fill src={src} alt={'image'} style={{ objectFit: 'cover' }} />
    </Stack>
}