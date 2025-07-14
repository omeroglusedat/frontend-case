'use client';

import Image from "next/image";
import FECStack from "./fec-stack";


export default function FECProductImage(props: { src: string, width?: string | string[], height?: string }) {
    const { src, width = '100%', height = '100%' } = props;

    return <FECStack
        style={{
            width: width as any,
            height,
            position: 'relative'
        }} >
        <Image fill src={src} alt={'image'} style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
    </FECStack>
}