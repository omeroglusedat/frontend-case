'use client';

import { usePathname, useSearchParams } from "next/navigation";
import FECTypo from "../atoms/fec-typo";
import FECStack from "../atoms/fec-stack";

export default function LanguageSelection() {
    const pathname = usePathname();
    const params = useSearchParams();
    const lang = pathname.split('/')[1];

    const handleClick = (lang: string) => {
        window.location.href = `/${lang}/${pathname.substring(4, pathname.length)}?${params.toString()}`;
    }

    return <FECStack style={{ flexDirection: 'row', gap: '4px' }}>
        <FECTypo hover={`
            {
                cursor: pointer;
            }
        `} style={{
                fontSize: '14px',
                fontWeight: lang === 'tr' ? 'bold' : ''
            }} onClick={() => handleClick('tr')}>TR</FECTypo>
        <FECTypo hover={`
            {
                cursor: pointer;
            }
        `} style={{
                fontSize: '14px',
                fontWeight: lang === 'en' ? 'bold' : ''
            }} onClick={() => handleClick('en')}> EN</FECTypo>
    </FECStack >
}