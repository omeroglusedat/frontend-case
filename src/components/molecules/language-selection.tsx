'use client';

import { Divider, Stack } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import FECTypo from "../atoms/fec-typo";

export default function LanguageSelection() {
    const pathname = usePathname();
    const params = useSearchParams();
    const lang = pathname.split('/')[1];

    const handleClick = (lang: string) => {
        window.location.href = `/${lang}/urunler?${params.toString()}`;
    }

    return <Stack direction={'row'} gap={0.2}>
        <FECTypo sx={{ '&:hover': { cursor: 'pointer' } }} fontWeight={lang === 'tr' ? 'bold' : ''} fontSize={'14px'} onClick={() => handleClick('tr')}>TR</FECTypo>
        <Divider orientation={'vertical'} />
        <FECTypo sx={{ '&:hover': { cursor: 'pointer' } }} fontWeight={lang === 'en' ? 'bold' : ''} fontSize={'14px'} onClick={() => handleClick('en')}> EN</FECTypo>
    </Stack >
}